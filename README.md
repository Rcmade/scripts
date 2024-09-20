# Scripts Repository

## Overview

This repository contains utility scripts that are minified before each commit to ensure that only minified versions are included in the repository. We use [Husky](https://github.com/typicode/husky) to manage Git hooks for this purpose.

## Getting Started

Follow these steps to set up the project and configure Husky on your local development environment.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository**

        git clone https://github.com/Rcmade/scripts.git
        cd scripts

2. **Install Dependencies**

        npm install

    The postinstall script in package.json will automatically set up Husky hooks.

3. **Setting Up Husky**

    If Husky is not automatically set up, follow these steps:

    1. **Install Husky**

            npm install husky --save-dev

    2. **Initialize Husky**

            npx husky install

    3. **Create and Configure the Pre-commit Hook**

        Create the pre-commit hook file:

            npx husky add .husky/pre-commit

        Add the following content to .husky/pre-commit:

            #!/bin/sh
            . "$(dirname "$0")/husky.sh"

            # Run your minify script
            npm run minify

            # Add changes in dist folder to staging
            git add dist

            # Proceed with the commit

        Make the hook file executable:

            chmod +x .husky/pre-commit

    4. **Verify .husky Directory**

        Ensure the .husky directory is included in the repository and not ignored. Add and commit the .husky directory:

            git add .husky
            git commit -m "Add Husky pre-commit hook"

## <https://cdn.jsdelivr.net/gh/Rcmade/scripts@master/dist/carousel.min.js>