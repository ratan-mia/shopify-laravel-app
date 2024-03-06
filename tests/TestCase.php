<?php

namespace Tests;
use Pest\Laravel\Concerns\ProvidesRoutes;
// use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Pest\Laravel\Testing\Concerns\MakesHttpRequests;


abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
}