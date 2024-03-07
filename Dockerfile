# Use the official PHP 8.1 image as the base image
FROM php:8.1-fpm

# Set the working directory inside the container
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the application files to the working directory
COPY . .


# Copy project dependencies first for caching
COPY composer.lock composer.json ./

# Install application dependencies
RUN composer install --no-interaction --no-scripts --no-progress

# Copy the rest of your application code
COPY . /app

# Set the appropriate permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose the port used by your web server
EXPOSE 80

# Command to start Laravel's development server (adjust for production)
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]
