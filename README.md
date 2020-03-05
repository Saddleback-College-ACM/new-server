# new-server

This is the redesigned server that will eventually support multiple rovers.

## Requirements

Running the server requires [Python](https://www.python.org/).
Building the frontend files requires [Node.js](https://nodejs.org/).
Python dependencies are managed using [Pipenv](https://pipenv.pypa.io/).

## Running the server

1. Install Python dependencies using Pipenv:
  ```
  pipenv install
  ```
2. Build the client-side files:
  ```
  cd rover/control-panel
  npm install
  npm run build
  ```
3. Collect the client-side files into Django's static directory:
  ```
  cd ..
  python manage.py collectstatic
  ```
4. Run the Django development server:
  ```
  python manage.py runserver
  ```

## Testing frontend components

UI components are tested using [Storybook](https://storybook.js.org/).
Create new test cases by creating a `*.stories.ts` (or `*.stories.js`) file in `src/`.

```
cd rover/control-panel
npm run storybook
```

## Resources

- https://docs.djangoproject.com/en/3.0/intro/tutorial01/ Intro to Django
- https://www.fullstackpython.com/django.html List of Django tutorials and resources
- https://stenciljs.com/docs/introduction Intro to Stencil
- https://whoisryosuke.com/blog/2019/using-stencil-with-storybook/ Overview of Stencil and Storybook, with notes on how to configure them
- https://dev.to/ofhouse/build-a-web-component-library-with-stencil-and-storybook-c27 Same, but with slightly clearer setup instructions
- https://medium.com/js-dojo/vue-django-best-of-both-frontends-701307871478 How to use a JavaScript framework with Django (Uses Vue, but the idea is the same: write front-end JavaScript, create a package/bundle, load it into Django)
- https://bloggeek.me/started-learning-webrtc-development/ Primer and resources for learning WebRTC
