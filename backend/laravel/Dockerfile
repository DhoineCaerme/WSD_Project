FROM php:8.4-cli-bookworm

WORKDIR /app

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libpq-dev \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo_pgsql mbstring xml bcmath \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . .

RUN rm -f bootstrap/cache/services.php bootstrap/cache/packages.php \
    && composer install --no-dev --optimize-autoloader --no-scripts

EXPOSE 8000

CMD ["sh", "-c", "php artisan package:discover --ansi || true; php artisan serve --host=0.0.0.0 --port=8000"]