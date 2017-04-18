# {{ name }}

> {{ description }}

## Usage

```bash
# install all this dependencies.
npm install

# development, default port: 8080
npm run dev

# production
npm run build

# build with report
npm run build --report
{{#lint}}

# lint the files
npm run lint
{{/lint}}
{{#unit}}

# run the tests
npm test
{{/unit}}
```
