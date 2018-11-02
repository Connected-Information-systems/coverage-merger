# coverage-merger
> A Node.js library for merging parsed coverage reports. 

[![NPM version][npm-image]][npm-url][![Dependency Status][depstat-image]][depstat-url]

This library makes it possible to merge parsed coverage results.
The following parsers are supported:
- [@connectis/coverage-parser](https://www.npmjs.com/package/@connectis/coverage-parser)
- [lcov](https://www.npmjs.com/package/lcov-parse)
- [cobertura](https://www.npmjs.com/package/cobertura-parse)
- [clover](https://www.npmjs.com/package/@cvrg-report/clover-json)
- [jacoco](https://www.npmjs.com/package/jacoco-parse)
- [golang-cover](https://www.npmjs.com/package/@cvrg-report/golang-cover-json)
- Any other parser that uses the same data structure.

## Example
```js
const coverageMerger = require('@connectis/coverage-merger');
const mergedResults = coverageMerger.mergeByFile(coverageResults);
```

## API
The API includes the following:
- mergeByFile(coverageResults)
- merge(coverageResults)

### mergeByFile(coverageResults)
Merges coverage results which are results for the same file.

#### coverageResults
Type: `Array<CoverageResult`. See below.

#### returns
Type: `Array<CoverageResult`. See below.

### merge(coverageResults)
Merges coverage results.

#### coverageResults
Type: `Array<CoverageResult`. See below.

#### returns
Type: `Array<CoverageResult`. See below.

### CoverageResult
The returned data has the following format.

``` json
{
  "title": "Test #1",
  "file": "/some/absolute/path/anim-base/anim-base-coverage.js",
  "functions": {
    "hit": 23,
    "found": 29,
    "details": [
      {
        "name": "(anonymous 1)",
        "line": 7,
        "hit": 6
      },
      {
        "name": "(anonymous 2)",
        "line": 620,
        "hit": 225
      },
      {
        "name": "_end",
        "line": 516,
        "hit": 228
      }
    ]
  },
  "lines": {
    "found": 181,
    "hit": 143,
    "details": [
      {
        "line": 7,
        "hit": 6
      },
      {
        "line": 29,
        "hit": 6
      },
      {
        "line": 41,
        "hit": 0
      }
    ]
  },
  "branches": {
    "found": 2,
    "hit": 1,
    "details": [
      {
        "line": 9,
        "branch": 0,
        "taken": 0
      },
      {
        "line": 9,
        "branch": 1,
        "taken": 1
      }
    ]
  }
}
```

[npm-url]: https://www.npmjs.org/package/@connectis/coverage-merger
[npm-image]: https://badge.fury.io/js/%40connectis%2Fcoverage-merger.svg

[depstat-url]: https://david-dm.org/Connected-Information-systems/coverage-merger
[depstat-image]: https://david-dm.org/Connected-Information-systems/coverage-merger.svg
