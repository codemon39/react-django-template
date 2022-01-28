# django-react 

Django and react application.


## Project Structure

```
app
  |- urls.py (Top level application URL configuration)
  |- backend
       |- api
           |- urls.py (Backend (DRF) URL configuration)
  |- frontend
  |    |- src (React application which is rendered using the `index.html` template)
  |        | - **.js 
  |    |- urls.py (Frontend URL configuration)

```
  

## Installation

```bash
pipenv install
```

## Usage
Run the Django server:

```bash
pipenv run python manage.py runserver
```
