SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "app/app.js",
        "app/App.vue",
        "app/store.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.12.json",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "app/Operator.vue",
        "npm:systemjs-plugin-vue@1.2.0.json",
        "npm:vue@2.0.0-alpha.5/dist/vue.common.js",
        "npm:vue@2.0.0-alpha.5.json",
        "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
        "github:jspm/nodelibs-process@0.2.0-alpha.json"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "systemjs-plugin-vue": "npm:systemjs-plugin-vue@1.2.0",
      "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
      "url": "github:jspm/nodelibs-url@0.2.0-alpha",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
      "constants": "github:jspm/nodelibs-constants@0.2.0-alpha"
    },
    "packages": {
      "npm:lru-cache@4.0.1": {
        "map": {
          "yallist": "npm:yallist@2.0.0",
          "pseudomap": "npm:pseudomap@1.0.2"
        }
      },
      "npm:cssnano@3.7.1": {
        "map": {
          "object-assign": "npm:object-assign@4.1.0",
          "postcss": "npm:postcss@5.0.21",
          "indexes-of": "npm:indexes-of@1.0.1",
          "defined": "npm:defined@1.0.0",
          "postcss-calc": "npm:postcss-calc@5.2.1",
          "postcss-colormin": "npm:postcss-colormin@2.2.0",
          "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
          "decamelize": "npm:decamelize@1.2.0",
          "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
          "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
          "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
          "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
          "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.0",
          "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
          "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.3",
          "autoprefixer": "npm:autoprefixer@6.3.6",
          "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.5",
          "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
          "postcss-minify-params": "npm:postcss-minify-params@1.0.4",
          "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.0",
          "postcss-merge-idents": "npm:postcss-merge-idents@2.1.6",
          "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
          "postcss-svgo": "npm:postcss-svgo@2.1.3",
          "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
          "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "postcss-ordered-values": "npm:postcss-ordered-values@2.2.1",
          "postcss-merge-rules": "npm:postcss-merge-rules@2.0.9",
          "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
          "postcss-zindex": "npm:postcss-zindex@2.1.1",
          "postcss-convert-values": "npm:postcss-convert-values@2.4.0",
          "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7"
        }
      },
      "npm:falafel@1.2.0": {
        "map": {
          "isarray": "npm:isarray@0.0.1",
          "object-keys": "npm:object-keys@1.0.9",
          "acorn": "npm:acorn@1.2.2",
          "foreach": "npm:foreach@2.0.5"
        }
      },
      "npm:postcss-selector-parser@2.1.0": {
        "map": {
          "uniq": "npm:uniq@1.0.1",
          "flatten": "npm:flatten@1.0.2",
          "indexes-of": "npm:indexes-of@1.0.1"
        }
      },
      "npm:postcss@5.0.21": {
        "map": {
          "js-base64": "npm:js-base64@2.1.9",
          "source-map": "npm:source-map@0.5.6",
          "supports-color": "npm:supports-color@3.1.2"
        }
      },
      "npm:vue-template-compiler@2.0.0-alpha.5": {
        "map": {
          "source-map": "npm:source-map@0.5.6",
          "entities": "npm:entities@1.1.1",
          "de-indent": "npm:de-indent@1.0.2"
        }
      },
      "npm:postcss-colormin@2.2.0": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "colormin": "npm:colormin@1.1.0"
        }
      },
      "npm:postcss-discard-empty@2.1.0": {
        "map": {
          "postcss": "npm:postcss@5.0.21"
        }
      },
      "npm:postcss-calc@5.2.1": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
          "reduce-css-calc": "npm:reduce-css-calc@1.2.4"
        }
      },
      "npm:postcss-minify-font-values@1.0.5": {
        "map": {
          "object-assign": "npm:object-assign@4.1.0",
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
        }
      },
      "npm:postcss-discard-duplicates@2.0.1": {
        "map": {
          "postcss": "npm:postcss@5.0.21"
        }
      },
      "npm:postcss-discard-overridden@0.1.1": {
        "map": {
          "postcss": "npm:postcss@5.0.21"
        }
      },
      "npm:postcss-discard-unused@2.2.1": {
        "map": {
          "flatten": "npm:flatten@1.0.2",
          "postcss": "npm:postcss@5.0.21",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:supports-color@3.1.2": {
        "map": {
          "has-flag": "npm:has-flag@1.0.0"
        }
      },
      "npm:postcss-discard-comments@2.0.4": {
        "map": {
          "postcss": "npm:postcss@5.0.21"
        }
      },
      "npm:postcss-filter-plugins@2.0.0": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "uniqid": "npm:uniqid@1.0.0"
        }
      },
      "npm:postcss-minify-gradients@1.0.3": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
        }
      },
      "npm:autoprefixer@6.3.6": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "num2fraction": "npm:num2fraction@1.2.2",
          "normalize-range": "npm:normalize-range@0.1.2",
          "browserslist": "npm:browserslist@1.3.3",
          "caniuse-db": "npm:caniuse-db@1.0.30000485"
        }
      },
      "npm:postcss-minify-selectors@2.0.5": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-selector-parser": "npm:postcss-selector-parser@2.1.0",
          "alphanum-sort": "npm:alphanum-sort@1.0.2"
        }
      },
      "npm:postcss-normalize-charset@1.1.0": {
        "map": {
          "postcss": "npm:postcss@5.0.21"
        }
      },
      "npm:postcss-minify-params@1.0.4": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "uniqs": "npm:uniqs@2.0.0",
          "alphanum-sort": "npm:alphanum-sort@1.0.2"
        }
      },
      "npm:postcss-merge-idents@2.1.6": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "has-own": "npm:has-own@1.0.0"
        }
      },
      "npm:postcss-reduce-transforms@1.0.3": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
        }
      },
      "npm:postcss-svgo@2.1.3": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "svgo": "npm:svgo@0.6.6",
          "is-svg": "npm:is-svg@2.0.1"
        }
      },
      "npm:postcss-reduce-idents@2.3.0": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
        }
      },
      "npm:postcss-ordered-values@2.2.1": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
        }
      },
      "npm:postcss-unique-selectors@2.0.2": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "uniqs": "npm:uniqs@2.0.0",
          "alphanum-sort": "npm:alphanum-sort@1.0.2"
        }
      },
      "npm:postcss-reduce-initial@1.0.0": {
        "map": {
          "postcss": "npm:postcss@5.0.21"
        }
      },
      "npm:postcss-zindex@2.1.1": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-merge-rules@2.0.9": {
        "map": {
          "postcss": "npm:postcss@5.0.21"
        }
      },
      "npm:postcss-merge-longhand@2.0.1": {
        "map": {
          "postcss": "npm:postcss@5.0.21"
        }
      },
      "npm:postcss-convert-values@2.4.0": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
        }
      },
      "npm:postcss-normalize-url@3.0.7": {
        "map": {
          "postcss": "npm:postcss@5.0.21",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "normalize-url": "npm:normalize-url@1.5.3",
          "is-absolute-url": "npm:is-absolute-url@2.0.0"
        }
      },
      "npm:normalize-url@1.5.3": {
        "map": {
          "object-assign": "npm:object-assign@4.1.0",
          "prepend-http": "npm:prepend-http@1.0.4",
          "query-string": "npm:query-string@4.2.2",
          "sort-keys": "npm:sort-keys@1.1.2"
        }
      },
      "npm:colormin@1.1.0": {
        "map": {
          "color": "npm:color@0.11.2",
          "css-color-names": "npm:css-color-names@0.0.3"
        }
      },
      "npm:reduce-css-calc@1.2.4": {
        "map": {
          "balanced-match": "npm:balanced-match@0.1.0",
          "reduce-function-call": "npm:reduce-function-call@1.0.1"
        }
      },
      "npm:is-svg@2.0.1": {
        "map": {
          "html-comment-regex": "npm:html-comment-regex@1.1.0"
        }
      },
      "npm:svgo@0.6.6": {
        "map": {
          "whet.extend": "npm:whet.extend@0.9.9",
          "sax": "npm:sax@1.2.1",
          "colors": "npm:colors@1.1.2",
          "mkdirp": "npm:mkdirp@0.5.1",
          "js-yaml": "npm:js-yaml@3.6.1",
          "coa": "npm:coa@1.0.1",
          "csso": "npm:csso@2.0.0"
        }
      },
      "npm:reduce-function-call@1.0.1": {
        "map": {
          "balanced-match": "npm:balanced-match@0.1.0"
        }
      },
      "npm:browserslist@1.3.3": {
        "map": {
          "caniuse-db": "npm:caniuse-db@1.0.30000485"
        }
      },
      "npm:query-string@4.2.2": {
        "map": {
          "object-assign": "npm:object-assign@4.1.0",
          "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
        }
      },
      "npm:csso@2.0.0": {
        "map": {
          "source-map": "npm:source-map@0.5.6",
          "clap": "npm:clap@1.1.1"
        }
      },
      "npm:js-yaml@3.6.1": {
        "map": {
          "argparse": "npm:argparse@1.0.7",
          "esprima": "npm:esprima@2.7.2"
        }
      },
      "npm:mkdirp@0.5.1": {
        "map": {
          "minimist": "npm:minimist@0.0.8"
        }
      },
      "npm:coa@1.0.1": {
        "map": {
          "q": "npm:q@1.4.1"
        }
      },
      "npm:sort-keys@1.1.2": {
        "map": {
          "is-plain-obj": "npm:is-plain-obj@1.1.0"
        }
      },
      "npm:color-string@0.3.0": {
        "map": {
          "color-name": "npm:color-name@1.1.1"
        }
      },
      "npm:argparse@1.0.7": {
        "map": {
          "sprintf-js": "npm:sprintf-js@1.0.3"
        }
      },
      "github:jspm/nodelibs-punycode@0.2.0-alpha": {
        "map": {
          "punycode-browserify": "npm:punycode@1.4.1"
        }
      },
      "github:jspm/nodelibs-url@0.2.0-alpha": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      },
      "npm:clap@1.1.1": {
        "map": {
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "supports-color": "npm:supports-color@2.0.0",
          "has-ansi": "npm:has-ansi@2.0.0",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
        }
      },
      "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:color@0.11.2": {
        "map": {
          "clone": "npm:clone@1.0.2",
          "color-convert": "npm:color-convert@1.3.1",
          "color-string": "npm:color-string@0.3.0"
        }
      },
      "npm:systemjs-plugin-vue@1.2.0": {
        "map": {
          "falafel": "npm:falafel@1.2.0",
          "cssnano": "npm:cssnano@3.7.1",
          "lru-cache": "npm:lru-cache@4.0.1",
          "postcss-selector-parser": "npm:postcss-selector-parser@2.1.0",
          "postcss": "npm:postcss@5.0.21",
          "vue-template-compiler": "npm:vue-template-compiler@2.0.0-alpha.5"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        },
        "*.vue": {
          "loader": "systemjs-plugin-vue"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "vue": "npm:vue@2.0.0-alpha.5"
  },
  packages: {
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    }
  }
});
