# ML_AI_Project

# Stage Front End

It's important that you review the following steps to run the front end.

### Step 1: Open project with terminal

In this step you need to open the terminal or consola on your computer. After, you must enter the path of the folder where the front end project is located. The following is an example image:

![](https://drive.google.com/uc?export=view&id=18gWUMOIpGtd2W7TAs_72xRV0qt0sWDce)

### Step 2: Installing project dependencies VITE + REACT

Once the previous step is completed, it's necessary to install the project dependencies. Therefore, run the following command:

```
npm install
```

This installs all dependencies that the project needs.

![](https://drive.google.com/uc?export=view&id=1ew4u8dbOkLAT90n-1hLSWNkFw-G7z8zH)

### Step 3: Run Scripts

In this step you must execute some scripts depending on the case. But, first see this image:

![](https://drive.google.com/uc?export=view&id=1tS-NH6zd92OqVDFf43ODayRPu6M9T1Np)

The most important scripts are **"dev"**, **"build"**, **"test:watch"** and **"test"**. Use each one according to the case.

With the following script you can run the project in developer mode:

```
npm run dev
```

With the following script you can run the project to obtain the production folder. This will create the folder on the server with node + express:

```
npm run build
```

With the following script you can run the project in test mode. However, in this case every time something is changed in the test, the changes applied automatically:

```
npm run test:watch
```

With the following script you can run the project in test normal mode:

```
npm run test
```

### Step 4: Run Scripts

Running server to consume SPA of the project created in React.

#### Step 4.1: Open project with terminal

In this step you need to open the terminal or consola on your computer. After, you must enter the path of the folder where the front end project is located. The following is an example image:

![](https://drive.google.com/uc?export=view&id=1zchZT85RYPZVhIFRZ-HxABP8NbN3UTyy)

#### Step 4.2: Installing project dependencies

Once the previous step is completed, it's necessary to install the project dependencies. Therefore, run the following command:

```
npm install
```

This installs all dependencies that the project needs.

#### Step 4.3: Defining environment variables

You need to copy the .env.template file and rename it to .env:

![](https://drive.google.com/uc?export=view&id=1mf-wad6Q3Jhs4ufNH143F4-0RIDwlDJM)

Then define a value for the port. For example, port 5173:

![](https://drive.google.com/uc?export=view&id=1VQkkfztsdOPKmib40XPw_hMEcHFue3ya)

#### Step 4.4: Run scripts

In this step you must execute some scripts depending on the case.

The most important scripts are **"dev"** and **"start"**. Use each one according to the case.

With the following script you can run the project in developer mode:

```
npm run dev
```

With the following script you can build the production build and run the server:

```
npm run start
```

# Stage Backend

To run de backend part of the project, you can follow the next steps:

### Step 1: Open another terminal

After running the frontend part, you can open a new terminal to run the backend.

```
cd back-end-app
```

### Step 2: Create a virtual environment and Install project dependencies

```
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

### Step 3: Setup the environment variables

To run this project, you will need to add the following environment variables to your .env file in the back-end-app directory. Do not include sensitive information directly in your project files or documentation.

```
DB_NAME='your_postgres_db_name'
DB_USERNAME='your_postgres_user'
DB_PASSWORD='your_postgres_password'
DB_HOST='your_postgres_host'
DB_PORT='your_postgres_port'
OPENAI_API_KEY='your_openai_api_key'
MODEL_PATH='your_path_to_your_ml_model'
```

### Step 4: Usage

Start the server:

```
uvicorn app.main:app --reload
```

Access http://localhost:8000/docs# in your browser to interact with the backend endpoints.
