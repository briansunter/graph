---
title: Managing Python Projects and Dependencies in 2022
date: 2022-02-13
url: /blog/python-setup-pyenv-poetry
coverimage: /assets/image_1661147875071_0.png
description: How to set up a Python project with the latest tools and best practices
categories:
- programming
tags:
- programming
- python
lastMod: 2023-02-02
---
![image.png](/assets/image_1661147875071_0.png)

# Managing Python projects in 2022

There are many different options for managing Python projects and their dependencies.
Overall, I recommend using `pyenv` + `poetry`. I will describe why we need these tools, how they work, and what they replace.

There are three main things to think about when managing a Python project:

1. How to manage the Python version

2. How to download Python dependencies, like Django

3. How to perform administrative tasks, like project initialization and publishing packages.

# Tools Overview

**Homebrew** installs development tools on macOS. Follow the instructions here to set it up if you haven't already [https://brew.sh/](https://brew.sh/).

**Python** is a programming language, but a command line tool called `python` on your computer runs Python code. The Python language and tool are continually updated with new features and versions. Projects usually need a specific version of Python installed to work correctly. There's probably a version of Python already installed on your local computer called your “System Python,” but it's unlikely to be the exact version you want, and you should avoid using it.

**[pyenv](https://github.com/pyenv/pyenv)** lets you easily install the exact Python version you want and switch between different Python versions for other projects.

**[poetry](https://python-poetry.org/)** helps us download Python dependencies and has tools to help Python project administration, such as project initialization and publishing packages.

# Initial Setup

## Set up pyenv

First, let's set up `pyenv` and set our terminal's default Python version to 3.9.0.

### Install pyenv using homebrew

`brew install pyenv`

### Install Python 3.9

`pyenv install 3.9.0`

### Use Python 3.9 globally

`pyenv global 3.9.0`

Now we will be using Python 3.9 in our terminal by default. If we work with a project that needs a different version of Python, `pyenv` can be configured to use a different version for that project.

## Install poetry

Install the poetry tool using homebrew.

`brew install poetry`

# Django Project Setup Example

Let's start by setting up a new Django project using poetry.

First, let's make the folder where we want the project to live.

`mkdir example`

`cd example`

Now let's initialize the Python project using Poetry. You can just keep hitting the enter key until the prompt finishes to use the default project settings.

`poetry init`

## pyproject.toml

Poetry should create a file called `pyproject.toml`, which configures our project and define our dependencies.

``` yaml
[tool.poetry]
name = "example"
version = "1.0.0"
description = "sample project"
authors = ["John Smith <john@example.com>"]
license = "MIT"

[tool.poetry.dependencies]
python = "^3.9"

[tool.poetry.dev-dependencies]

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"
```

## Add a dependency

Add Django to the list of dependencies and install it.

This will allow us to run the Django command line tools and import Django libraries.

`poetry add django`

This will add Django to the list of dependencies in `pyproject.toml`.

``` yaml
[tool.poetry.dependencies]
python = "^3.9"
Django = "^4.0.2"
```

## poetry.lock

Poetry adds the [semver](https://semver.org) `^` syntax in the dependency version in `pyproject.toml`. This allows for "loose" versions, meaning this `^4.0.2` syntax allows for any version greater or equal to `4.0.2` but less than `5.0.0`. According to the semver syntax `MAJOR.MINOR.PATCH`, anything besides `MAJOR` version dependency upgrades should be backward compatible. This allows easy upgrades to the latest dependency version to get backward-compatible improvements.

In addition to loose versions, we need to specify "exact" dependencies to ensure we have "reproducible builds." We want `poetry install` to install the exact same dependencies every time. Otherwise, the version you deploy might be different than the one you tested locally.

When you install or update dependencies, poetry creates a `poetry.lock` file, which specifies the exact version of every dependency to install. This `poetry.lock` file should be checked into git.

When we want to upgrade dependencies, we can run `poetry update` to fetch the latest compatible versions of all dependencies or run `poetry update django` to only update Django. This will update the exact versions in the `poetry.lock` file to the latest compatible version. Although these updates are backward compatible in theory, I'm still careful to test that things still work correctly.

## Virtualenv

Behind the scenes, Poetry uses a tool built into Python called virtualenv, which isolates dependencies to the project you're working on. Poetry enables virtualenv by default and handles it automatically, whereas other tools do not. virtualenv makes it easier to work on multiple Python projects on the same computer.

virtualenv makes poetry save dependencies to a `.venv` folder inside your project directory. If you disabled virtualenv, dependencies would be saved to a global system folder shared by all projects. Since all projects share this folder, you can only have one version of a dependency installed. This makes it very difficult to work on multiple projects.

We want the option to work on multiple projects locally, so we'll use poetry with its default settings and let it manage virtualenv for us automatically.

# Initialize Django project

Django includes some command line tools for generating projects like `django-admin`. You'll see these if you follow any Django tutorials.

You'll use `poetry shell` instead of any manual virtualenv commands you may see, like `source env/bin/activate`

Since we've installed Django at the project level using poetry, we need to open a poetry shell to access these commands.

Run `poetry shell`

It should open a new shell with the text `(.venv)` on the left side of the prompt.

This shell has access to the dependencies you installed using poetry like Django.

Now, you can use the Django commands to generate your site. If following a Django tutorial, run `poetry shell` before running the Django terminal commands.

Run `django-admin startproject mysite` to create your project skeleton.

Run `python mysite/manage.py runserver` to start your local server.

Type `CONTROL-D` to exit the poetry shell.

# Other Tools

You will probably encounter many different tools and options, but you shouldn't need most of them.

## Pip

pip is a dependency management tool included with Python 3.4 and later, though it's pretty simplistic. It can install dependencies from a `requirements.txt` file, but it doesn't have a concept like `poetry.lock` and doesn't handle virtualenv for you.

## setup.py

`pyproject.toml` is the future standard for declaring Python project metadata and dependencies. You may encounter a `setup.py` file to declare project metadata, but this is no longer needed with `pyproject.toml`.

## [Pipenv](https://github.com/pypa/pipenv)

Pipenv solves many of the same problems as Poetry but uses its own file format for listing dependencies called a `Pipfile`. This `Pipfile` is very similar to `pyproject.toml` but is nonstandard, so I prefer Poetry.

There seem to have been some stalls in Pipenv's development during its history.  See this GitHub issue [https://github.com/pypa/pipenv/issues/4058](https://github.com/pypa/pipenv/issues/4058)

> As of writing, it's been 381 days and 669 commits since a release. Please consider the impact of the project maintainers' silence regarding the lack of a release.

## Conda / Anaconda

Anaconda is commonly used in data science projects to manage dependencies. It includes tools like conda and miniconda. Not only does it have its own dependency file format and lockfile, but it also uses a different package repository than any of the other tools. I would avoid using nonstandard build specification formats like the conda and Pipenv formats.

# Conclusion

`poetry` + `pyenv` takes the place of older tools such as `pip`, `pipenv`, `setup.py`, and manual `virtualenv` commands. If you see these commands in other tutorials or projects, you can just use `poetry` instead.
