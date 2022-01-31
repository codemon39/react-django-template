# django-react 

Sample django and react application.

![Screen Shot 2022-01-28 at 1 03 47 AM](https://user-images.githubusercontent.com/17484350/151495806-daedcaae-4dff-4396-9135-709f4d65944e.png)


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
