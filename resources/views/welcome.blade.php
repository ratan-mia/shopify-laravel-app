@extends('shopify-app::layouts.default')

@section('content')
<link href="https://unpkg.com/@shopify/polaris@12.20.0/build/esm/styles.css" rel="stylesheet" />
<!-- You are: (shop domain name) -->
{{-- <p>You are: {{ $shopDomain ?? Auth::user()->name }}</p> --}}

<div id="root"></div>
<!-- You are: (shop domain name) -->
<h1>Products</h1>
<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Created</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($products as $product)
        <tr>
            <td>{{ $product->title }}</td>
            <td>{{ $product->variants[0]->price }}</td>
            <td>{{ $product->created_at }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection

@section('scripts')
@parent

<script src="{{asset('/js/app.js')}}"></script>

<script>
    actions.TitleBar.create(app, {
        title: 'Welcome'
    });
</script>
@endsection