# projetRecette

## Backend

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/projetRecette.git
    cd projetRecette
    ```

2. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

3. Install PHP dependencies using Composer:
    ```bash
    composer install
    ```

4. Copy the example environment file and configure the environment variables:
    ```bash
    cp .env.example .env
    ```

5. Generate the application key:
    ```bash
    php artisan key:generate
    ```

6. Set up the database:
    - Ensure the `DB_CONNECTION` in the `.env` file is set to `sqlite`.
    - Create the SQLite database file:
        ```bash
        touch database/database.sqlite
        ```

7. Run the database migrations:
    ```bash
    php artisan migrate
    ```

8. Serve the application:
    ```bash
    php artisan serve
    ```

### Additional Commands

- To generate Swagger documentation:
    ```bash
    php artisan l5-swagger:generate
    ```

- To check the application logs:
    ```bash
    tail -f storage/logs/laravel.log
    ```