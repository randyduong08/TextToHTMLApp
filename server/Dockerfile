# Python runtime for parent image
FROM python:3.11

# Set Environment variables when needed here

# Set work directory
WORKDIR /usr/src/app

# Install dependencies
COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy current directory contents into the container at /usr/src/app/
COPY . /usr/src/app/