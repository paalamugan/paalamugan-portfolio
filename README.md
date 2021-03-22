## Local development

--------------------------------------------------------------------------------

Node Version: 12.16.1

```
nvm install v14.15.3
nvm use v14.15.3
```

Install node_modules packages:

```
npm install
```

--------------------------------------------------------------------------------

### For development

It helps to export all environment variables

```
cp .env.example .env.development
```

For production,
```
cp .env.example .env.production
```


Start the server and watch for changes:

```
npm run dev
```

- View: http://localhost:8000


To Clean a built public folder

```
npm run clean
```

--------------------------------------------------------------------------------

### Create Production Build

```
npm run build
```

and

```
npm run serve
```
- View: http://localhost:9000


## Testing

Before submitting changes, run

```
npm run test
```

This will run some tests to verify that
 - Frontend works as expected
 - No linting issues are present

--------------------------------------------------------------------------------

## To Update Contents

If you want to update contents, change it in content folder(common in content folder contains header-nav and footer section).

    header-nav, footer and common of all page content

    ```
    cd ./content/common
    ```

    body content

    ```
    cd ./content/site
    ```

--------------------------------------------------------------------------------
