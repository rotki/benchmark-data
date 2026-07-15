window.BENCHMARK_DATA = {
  "lastUpdate": 1784090419778,
  "repoUrl": "https://github.com/rotki/rotki",
  "entries": {
    "rotki backend micro benchmarks (bugfixes)": [
      {
        "commit": {
          "author": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "36f70c8ce5b09c2799638505b2d9e62098ab1137",
          "message": " Add MCP server exposing rotki data to LLM clients\n\nAdd a premium-gated Model Context Protocol server that lets local LLM\n  clients query the user's rotki data. It runs as a stdio subprocess\n  talking to the running backend over REST, so no ports are exposed.\n\n  The public surface is a generic, privacy-filtered analytics layer rather\n  than one tool per question:\n  - refresh_analytics_data loads source tables (history_events by default,\n    balances opt-in) into an in-memory Polars session\n  - list_tables / describe_table expose the schema\n  - query_sql runs read-only Polars SQL (aggregations, joins, windows) so\n    the math is computed exactly instead of by the model\n  - info reports connectivity and unlock state (ungated)\n\n  All rows pass through a fail-closed privacy filter before they can be\n  queried: identifiers are HMAC-hashed consistently within a session,\n  free-text notes are redacted, and unrecognized columns are hidden by\n  default. A --privacy-mode flag selects balanced (default), strict, or raw.\n\n  History events load complete by default (opt-in --max-events cap),\n  accept second or millisecond time ranges, and gain readable year/datetime\n  columns so models can filter by date without unix-timestamp math.",
          "timestamp": "2026-06-16T14:37:57Z",
          "url": "https://github.com/rotki/rotki/commit/36f70c8ce5b09c2799638505b2d9e62098ab1137"
        },
        "date": 1782288268733,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 249.39220754098164,
            "unit": "iter/sec",
            "range": "stddev: 0.007941182862009595",
            "extra": "mean: 4.0097483793100235 msec\nrounds: 232"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 179.1381170097779,
            "unit": "iter/sec",
            "range": "stddev: 0.00008621688420489057",
            "extra": "mean: 5.582284868749721 msec\nrounds: 160"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1392.1690615085238,
            "unit": "iter/sec",
            "range": "stddev: 0.00003931900618301771",
            "extra": "mean: 718.3035650256601 usec\nrounds: 1361"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2540.4700649570186,
            "unit": "iter/sec",
            "range": "stddev: 0.00026761479423261165",
            "extra": "mean: 393.62794066889296 usec\nrounds: 927"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.967996123622273,
            "unit": "iter/sec",
            "range": "stddev: 0.0032219950880260076",
            "extra": "mean: 111.50763071428368 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46287.377486103935,
            "unit": "iter/sec",
            "range": "stddev: 0.000002789776722771184",
            "extra": "mean: 21.604161961869906 usec\nrounds: 5668"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yabir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "9e37c9f57af106fc6f37999a6f62e1069811a664",
          "message": "Define once the session user for http clients",
          "timestamp": "2026-06-24T15:55:44Z",
          "url": "https://github.com/rotki/rotki/commit/9e37c9f57af106fc6f37999a6f62e1069811a664"
        },
        "date": 1782367005772,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 241.77924968082215,
            "unit": "iter/sec",
            "range": "stddev: 0.009010798154551306",
            "extra": "mean: 4.1360042324563455 msec\nrounds: 228"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 180.2936813630344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000532867884332689",
            "extra": "mean: 5.546506080745156 msec\nrounds: 161"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1512.2901896921271,
            "unit": "iter/sec",
            "range": "stddev: 0.000014984705272054026",
            "extra": "mean: 661.2487516060529 usec\nrounds: 1401"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3288.1153364771244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002132468519910633",
            "extra": "mean: 304.12558492288065 usec\nrounds: 1101"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.177580368735736,
            "unit": "iter/sec",
            "range": "stddev: 0.0005877098967263678",
            "extra": "mean: 98.25518087500207 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 56657.64018032921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017507104989349331",
            "extra": "mean: 17.649870287876674 usec\nrounds: 4934"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "committer": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "be00ba4d91d6e3df44071ec619b01e74bc392b0e",
          "message": "fix: drop unnecessary type assertion in password-manager spec\n\nThe type-aware no-unnecessary-type-assertion rule flags the\n`{} as Record<string, string>` cast once the keyring bugfix spec\nlands in the merged develop tree. Annotate the backing store type\ninstead of asserting it.",
          "timestamp": "2026-06-25T14:43:13Z",
          "url": "https://github.com/rotki/rotki/commit/be00ba4d91d6e3df44071ec619b01e74bc392b0e"
        },
        "date": 1782453689637,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 243.59972284559728,
            "unit": "iter/sec",
            "range": "stddev: 0.00919603628228812",
            "extra": "mean: 4.105094982533449 msec\nrounds: 229"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 187.0951893971835,
            "unit": "iter/sec",
            "range": "stddev: 0.00006868715176499269",
            "extra": "mean: 5.344872859756457 msec\nrounds: 164"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1446.8569287066368,
            "unit": "iter/sec",
            "range": "stddev: 0.000012377702644241581",
            "extra": "mean: 691.1533408447733 usec\nrounds: 1420"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2954.188970014585,
            "unit": "iter/sec",
            "range": "stddev: 0.00022938985333295823",
            "extra": "mean: 338.50238090729283 usec\nrounds: 1058"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.15099426324121,
            "unit": "iter/sec",
            "range": "stddev: 0.0017247347560724756",
            "extra": "mean: 98.512517500005 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 55476.34029500074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016126628252820492",
            "extra": "mean: 18.025702392811144 usec\nrounds: 4973"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6e2a83e4add22529b8b586d04c7aa459a9ada678",
          "message": "Merge pull request #12484 from yabirgb/across",
          "timestamp": "2026-06-26T17:04:17Z",
          "url": "https://github.com/rotki/rotki/commit/6e2a83e4add22529b8b586d04c7aa459a9ada678"
        },
        "date": 1782538870950,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 315.3860644549213,
            "unit": "iter/sec",
            "range": "stddev: 0.006623643603820274",
            "extra": "mean: 3.1707171390983624 msec\nrounds: 266"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 236.29936424144415,
            "unit": "iter/sec",
            "range": "stddev: 0.00014941924381876824",
            "extra": "mean: 4.231919976637041 msec\nrounds: 214"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1856.7791533194084,
            "unit": "iter/sec",
            "range": "stddev: 0.000059659917763133345",
            "extra": "mean: 538.5670117053372 usec\nrounds: 1794"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2149.9604213304206,
            "unit": "iter/sec",
            "range": "stddev: 0.0014073124146878919",
            "extra": "mean: 465.1248414057726 usec\nrounds: 1053"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.869823550168467,
            "unit": "iter/sec",
            "range": "stddev: 0.0034466117512119386",
            "extra": "mean: 84.24725066665435 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 72347.39489856893,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012136125655783285",
            "extra": "mean: 13.82219776402454 usec\nrounds: 6083"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6e2a83e4add22529b8b586d04c7aa459a9ada678",
          "message": "Merge pull request #12484 from yabirgb/across",
          "timestamp": "2026-06-26T17:04:17Z",
          "url": "https://github.com/rotki/rotki/commit/6e2a83e4add22529b8b586d04c7aa459a9ada678"
        },
        "date": 1782626874878,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 392.2935841968356,
            "unit": "iter/sec",
            "range": "stddev: 0.0059795717607082546",
            "extra": "mean: 2.5491112786036396 msec\nrounds: 341"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 314.5325775923058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000476115939544023",
            "extra": "mean: 3.179320907407533 msec\nrounds: 270"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1381.7747127763087,
            "unit": "iter/sec",
            "range": "stddev: 0.000013090693457231743",
            "extra": "mean: 723.7069767985304 usec\nrounds: 1250"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2487.1501346593145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744733808400153",
            "extra": "mean: 402.06660067064195 usec\nrounds: 894"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.828096887336404,
            "unit": "iter/sec",
            "range": "stddev: 0.00227749276631584",
            "extra": "mean: 113.2746970000369 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45622.79119191945,
            "unit": "iter/sec",
            "range": "stddev: 0.000003332357916378864",
            "extra": "mean: 21.918869360564607 usec\nrounds: 5588"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6e2a83e4add22529b8b586d04c7aa459a9ada678",
          "message": "Merge pull request #12484 from yabirgb/across",
          "timestamp": "2026-06-26T17:04:17Z",
          "url": "https://github.com/rotki/rotki/commit/6e2a83e4add22529b8b586d04c7aa459a9ada678"
        },
        "date": 1782714566508,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 375.1546607576022,
            "unit": "iter/sec",
            "range": "stddev: 0.006318110162449933",
            "extra": "mean: 2.665567310240956 msec\nrounds: 332"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 314.17616962964325,
            "unit": "iter/sec",
            "range": "stddev: 0.00011031705745421475",
            "extra": "mean: 3.1829275949822 msec\nrounds: 279"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1360.0982952951588,
            "unit": "iter/sec",
            "range": "stddev: 0.000012043537259497653",
            "extra": "mean: 735.2409774052303 usec\nrounds: 1372"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2645.2143222150817,
            "unit": "iter/sec",
            "range": "stddev: 0.00025013890347186553",
            "extra": "mean: 378.0412012749908 usec\nrounds: 1098"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.274941919327945,
            "unit": "iter/sec",
            "range": "stddev: 0.0012802204893398493",
            "extra": "mean: 107.81738675000341 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46583.05979180356,
            "unit": "iter/sec",
            "range": "stddev: 0.00000248150203265907",
            "extra": "mean: 21.467031244176738 usec\nrounds: 5409"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "committer": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "8abb47426d4fac087a8f6ef573d5f60d8129e23e",
          "message": "ci(renovate): group non-major deps by subproject\n\nBucket minor/patch updates into frontend/core/colibri groups so\nthe dependency dashboard reads per-stack. Majors, GitHub Actions,\nDockerfile and submodules stay individual as before.",
          "timestamp": "2026-06-29T17:41:33Z",
          "url": "https://github.com/rotki/rotki/commit/8abb47426d4fac087a8f6ef573d5f60d8129e23e"
        },
        "date": 1782799143223,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 404.84390766996904,
            "unit": "iter/sec",
            "range": "stddev: 0.005476876786096836",
            "extra": "mean: 2.4700878068176477 msec\nrounds: 352"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 317.38532337290314,
            "unit": "iter/sec",
            "range": "stddev: 0.00004586867204633974",
            "extra": "mean: 3.150744304660482 msec\nrounds: 279"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1399.8688065467811,
            "unit": "iter/sec",
            "range": "stddev: 0.000011678025470490731",
            "extra": "mean: 714.3526559941114 usec\nrounds: 1343"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2413.7240177871827,
            "unit": "iter/sec",
            "range": "stddev: 0.0002624986519503435",
            "extra": "mean: 414.2975719803977 usec\nrounds: 1035"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.80503557078557,
            "unit": "iter/sec",
            "range": "stddev: 0.003420492335320747",
            "extra": "mean: 113.57137537500961 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46098.98577165012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025870268737301203",
            "extra": "mean: 21.692451216898103 usec\nrounds: 4807"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "committer": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "1931c02180035ae876e8579dd1126ae082eae9f8",
          "message": "fix: unify login unlock-flow stage layouts\n\nThe asset-update/loading stages shown during the login flow each used\ntheir own width and presentation, so the content shifted and resized as\nthe flow advanced (login form -> check -> prompt -> restart -> unlock).\n\n- Cap the update prompt at 27.5rem to match the login form and status\n  screens instead of 32rem.\n- Give the busy/restart/unlock spinner a matching 27.5rem centered,\n  text-centered container.\n- Render the checking/applying status as the same centered spinner +\n  title + message block as the other loading phases, dropping the flat\n  card and its oversized spinner-to-text gap.",
          "timestamp": "2026-06-30T19:52:28Z",
          "url": "https://github.com/rotki/rotki/commit/1931c02180035ae876e8579dd1126ae082eae9f8"
        },
        "date": 1782886668612,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 404.0727270598258,
            "unit": "iter/sec",
            "range": "stddev: 0.005462645281376253",
            "extra": "mean: 2.474802017142679 msec\nrounds: 350"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 317.5519736890127,
            "unit": "iter/sec",
            "range": "stddev: 0.00004008897691300116",
            "extra": "mean: 3.1490908035713465 msec\nrounds: 280"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1359.1644437071295,
            "unit": "iter/sec",
            "range": "stddev: 0.00012033187152032976",
            "extra": "mean: 735.7461450893269 usec\nrounds: 1344"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2049.648834496705,
            "unit": "iter/sec",
            "range": "stddev: 0.0007390293158314427",
            "extra": "mean: 487.8884534606396 usec\nrounds: 838"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.42867374458605,
            "unit": "iter/sec",
            "range": "stddev: 0.005166496513594806",
            "extra": "mean: 118.64262757142845 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 44301.81394520135,
            "unit": "iter/sec",
            "range": "stddev: 0.000005168668446986237",
            "extra": "mean: 22.572439161000027 usec\nrounds: 5531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f4b2e9c3335094d6ca94981563c7d58103ad35b0",
          "message": "Merge pull request #12506 from yabirgb/gpay\n\nSend messages for missing gnosisPay addresses",
          "timestamp": "2026-07-01T15:51:20Z",
          "url": "https://github.com/rotki/rotki/commit/f4b2e9c3335094d6ca94981563c7d58103ad35b0"
        },
        "date": 1782971164451,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 386.80277140290127,
            "unit": "iter/sec",
            "range": "stddev: 0.0056682045548620595",
            "extra": "mean: 2.585296884955306 msec\nrounds: 339"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 312.234731910504,
            "unit": "iter/sec",
            "range": "stddev: 0.000031679363838179216",
            "extra": "mean: 3.2027186529864666 msec\nrounds: 268"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1365.9386935113666,
            "unit": "iter/sec",
            "range": "stddev: 0.00002373908887503722",
            "extra": "mean: 732.0972784139659 usec\nrounds: 1311"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2395.1307771552133,
            "unit": "iter/sec",
            "range": "stddev: 0.000296928182326848",
            "extra": "mean: 417.5137364264249 usec\nrounds: 1013"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.796724714606755,
            "unit": "iter/sec",
            "range": "stddev: 0.0016276151928108248",
            "extra": "mean: 113.67867387500752 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45017.635986976624,
            "unit": "iter/sec",
            "range": "stddev: 0.000002715540419168087",
            "extra": "mean: 22.21351650471595 usec\nrounds: 5574"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "committer": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "e6e3aff9d788d4d5876bb1304708672ce697f866",
          "message": "dev: instance mode overrides stale VITE_BACKEND_URL from app/.env\n\nIn electron instance mode the renderer connected to the default backend\nport (4242) instead of the instance's reserved port. start-dev loads the\nenv files into process.env before prepareInstance writes the managed\nblock, so on a fresh instance run the default VITE_BACKEND_URL from\napp/.env lands in process.env. Vite gives process.env VITE_* vars priority\nover .env files, so that stale value shadowed the instance's real port.\n\nAdd readManagedBlockEnv and, in instance mode, propagate the whole managed\nblock (instance ports, data-dir pointers, dev flags) onto process.env\nafter it is written, overriding the stale seed. Previously only the dev\nflags were propagated.",
          "timestamp": "2026-07-02T15:49:12Z",
          "url": "https://github.com/rotki/rotki/commit/e6e3aff9d788d4d5876bb1304708672ce697f866"
        },
        "date": 1783057366553,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 385.74854245484306,
            "unit": "iter/sec",
            "range": "stddev: 0.007133551563341152",
            "extra": "mean: 2.5923623551139228 msec\nrounds: 352"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 313.0735630876436,
            "unit": "iter/sec",
            "range": "stddev: 0.00012800829864988644",
            "extra": "mean: 3.194137474073639 msec\nrounds: 270"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1392.3544587867884,
            "unit": "iter/sec",
            "range": "stddev: 0.000018370641183873243",
            "extra": "mean: 718.207920180999 usec\nrounds: 1328"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2511.9905753040425,
            "unit": "iter/sec",
            "range": "stddev: 0.0002595142378670063",
            "extra": "mean: 398.0906655587127 usec\nrounds: 903"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.16026467123699,
            "unit": "iter/sec",
            "range": "stddev: 0.0005843341462109177",
            "extra": "mean: 109.16715137500077 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46789.98851089085,
            "unit": "iter/sec",
            "range": "stddev: 0.000002826459252246062",
            "extra": "mean: 21.372093300840195 usec\nrounds: 5359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ae9c98a22cfef202078d65ad0045598b7b4160d2",
          "message": "Merge pull request #12527 from yabirgb/deps\n\nBump dependencies and address unneded ignores",
          "timestamp": "2026-07-03T14:06:18Z",
          "url": "https://github.com/rotki/rotki/commit/ae9c98a22cfef202078d65ad0045598b7b4160d2"
        },
        "date": 1783142714382,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 501.97240684532704,
            "unit": "iter/sec",
            "range": "stddev: 0.005249500448156898",
            "extra": "mean: 1.9921413734363498 msec\nrounds: 399"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 399.60283686524735,
            "unit": "iter/sec",
            "range": "stddev: 0.00014027520618495348",
            "extra": "mean: 2.5024847367067524 msec\nrounds: 357"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1806.5002144302885,
            "unit": "iter/sec",
            "range": "stddev: 0.000029747557333770347",
            "extra": "mean: 553.5565354556946 usec\nrounds: 1664"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2794.5751004542453,
            "unit": "iter/sec",
            "range": "stddev: 0.00033532971190761835",
            "extra": "mean: 357.8361518491504 usec\nrounds: 1080"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.357264221899054,
            "unit": "iter/sec",
            "range": "stddev: 0.07470882966241245",
            "extra": "mean: 106.86884288889411 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 72363.26792029137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011781119630593267",
            "extra": "mean: 13.819165838412752 usec\nrounds: 8255"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "b5567802952d9f405944dd6c1c2e359ae44c32f2",
          "message": "chore: bump ruff to 0.15.20\n\nIgnore the new preview rule PLW0717 (too many statements in\ntry clause) which fires 129 times across the codebase and is\ntoo strict for our error handling style.",
          "timestamp": "2026-07-04T12:36:10Z",
          "url": "https://github.com/rotki/rotki/commit/b5567802952d9f405944dd6c1c2e359ae44c32f2"
        },
        "date": 1783230754482,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 504.6316507116785,
            "unit": "iter/sec",
            "range": "stddev: 0.005500284464125512",
            "extra": "mean: 1.9816434395062357 msec\nrounds: 405"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 393.53602276521764,
            "unit": "iter/sec",
            "range": "stddev: 0.000029314335408600414",
            "extra": "mean: 2.541063440580119 msec\nrounds: 345"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1901.5105296362774,
            "unit": "iter/sec",
            "range": "stddev: 0.000010162727831305055",
            "extra": "mean: 525.8976926050894 usec\nrounds: 1812"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 813.7889003354383,
            "unit": "iter/sec",
            "range": "stddev: 0.006352747439795107",
            "extra": "mean: 1.2288199059827514 msec\nrounds: 1053"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.684579753933406,
            "unit": "iter/sec",
            "range": "stddev: 0.05701206619255158",
            "extra": "mean: 149.59803560000466 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 71585.54588685739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011201584339416041",
            "extra": "mean: 13.969300472759167 usec\nrounds: 8460"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "8ba9b76497577cd6b3be1b2cac410d8eded41aa5",
          "message": "feat: avatars for gwei names\n\nRoute .gwei names in try_download_ens_avatar to the GNS contract,\nwhich implements the same ENS resolver text(bytes32,string) interface,\nand skip the ENS metadata app for their NFT avatars since it only\nknows ENS names, falling back to opensea directly. The frontend needs\nno changes: avatars are requested for the displayed name from the\nmerged name mappings, so they follow the address name priority\nsetting automatically.",
          "timestamp": "2026-07-04T21:05:20Z",
          "url": "https://github.com/rotki/rotki/commit/8ba9b76497577cd6b3be1b2cac410d8eded41aa5"
        },
        "date": 1783318422659,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 395.1680531333589,
            "unit": "iter/sec",
            "range": "stddev: 0.006133964086430434",
            "extra": "mean: 2.530568936610182 msec\nrounds: 347"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 317.80038290682364,
            "unit": "iter/sec",
            "range": "stddev: 0.00002605340449003432",
            "extra": "mean: 3.146629311309519 msec\nrounds: 257"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1381.5187748986248,
            "unit": "iter/sec",
            "range": "stddev: 0.000012881788304087974",
            "extra": "mean: 723.8410495531482 usec\nrounds: 1332"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2648.352851583347,
            "unit": "iter/sec",
            "range": "stddev: 0.0002519806703720629",
            "extra": "mean: 377.59318944306796 usec\nrounds: 929"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.124574280304723,
            "unit": "iter/sec",
            "range": "stddev: 0.0019736797272975263",
            "extra": "mean: 109.59415412492035 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45364.465441405046,
            "unit": "iter/sec",
            "range": "stddev: 0.000002584452165233007",
            "extra": "mean: 22.04368530015302 usec\nrounds: 5402"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "committer": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "1cc567fc8fc2174ef94fdb44fc2c43b6ac3953e9",
          "message": "fix: drop duplicate nginx Host header for uvicorn\n\nEach proxied REST/colibri location set `proxy_set_header Host` twice\n($host and $http_host), so nginx forwarded two Host headers. The old\ngevent WSGI server tolerated that; the uvicorn server the gevent-removal\nflip switched to rejects it with \"Invalid HTTP request received.\" (400),\nbreaking every /api and /colibri request in the Docker deployment. Keep a\nsingle Host ($host, matching the /ws location).",
          "timestamp": "2026-07-06T15:15:24Z",
          "url": "https://github.com/rotki/rotki/commit/1cc567fc8fc2174ef94fdb44fc2c43b6ac3953e9"
        },
        "date": 1783403624550,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 388.2441092647285,
            "unit": "iter/sec",
            "range": "stddev: 0.00551291018504671",
            "extra": "mean: 2.5756990927533665 msec\nrounds: 345"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 313.2615075252531,
            "unit": "iter/sec",
            "range": "stddev: 0.00010904668565558844",
            "extra": "mean: 3.192221118706666 msec\nrounds: 278"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1381.168281902191,
            "unit": "iter/sec",
            "range": "stddev: 0.000028375535160389753",
            "extra": "mean: 724.0247355106986 usec\nrounds: 1346"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2165.0897761578362,
            "unit": "iter/sec",
            "range": "stddev: 0.0003270957529260927",
            "extra": "mean: 461.8746118577115 usec\nrounds: 894"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.242934546593455,
            "unit": "iter/sec",
            "range": "stddev: 0.0012456025579940615",
            "extra": "mean: 108.19074774997262 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46039.15301339116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032938738002511476",
            "extra": "mean: 21.72064285607373 usec\nrounds: 8694"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a3b0685c9e3fb9f26d0020a0e72b073f8589a9ad",
          "message": "Merge pull request #12549 from yabirgb/vendor-coincurve\n\nVendor what we need from coincurve and bip-utils",
          "timestamp": "2026-07-07T14:28:31Z",
          "url": "https://github.com/rotki/rotki/commit/a3b0685c9e3fb9f26d0020a0e72b073f8589a9ad"
        },
        "date": 1783486758933,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 597.6962198389228,
            "unit": "iter/sec",
            "range": "stddev: 0.00679367950564346",
            "extra": "mean: 1.6730907220217934 msec\nrounds: 554"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 565.6718603826829,
            "unit": "iter/sec",
            "range": "stddev: 0.000025563043157196335",
            "extra": "mean: 1.7678093432533297 msec\nrounds: 504"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 2686.083133298564,
            "unit": "iter/sec",
            "range": "stddev: 0.000013833749279356155",
            "extra": "mean: 372.2892964865089 usec\nrounds: 2533"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2381.992303488791,
            "unit": "iter/sec",
            "range": "stddev: 0.0016200095333914106",
            "extra": "mean: 419.81663775124184 usec\nrounds: 1245"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.729821134900849,
            "unit": "iter/sec",
            "range": "stddev: 0.06669360438675949",
            "extra": "mean: 93.19819850000144 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 100282.16491491841,
            "unit": "iter/sec",
            "range": "stddev: 7.235897641947696e-7",
            "extra": "mean: 9.971862901528123 usec\nrounds: 8782"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ecb754839accb3f8c23f2c9916f2fbd2f26e41c1",
          "message": "Merge pull request #12555 from yabirgb/clean-deps2\n\nRemove miniupnpc dep and deprecate code",
          "timestamp": "2026-07-08T16:16:51Z",
          "url": "https://github.com/rotki/rotki/commit/ecb754839accb3f8c23f2c9916f2fbd2f26e41c1"
        },
        "date": 1783577003525,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 386.1614620151294,
            "unit": "iter/sec",
            "range": "stddev: 0.007318546744264148",
            "extra": "mean: 2.5895903614556466 msec\nrounds: 332"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 316.14145595762807,
            "unit": "iter/sec",
            "range": "stddev: 0.00005426452957577807",
            "extra": "mean: 3.1631409963963355 msec\nrounds: 278"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1456.1639347943808,
            "unit": "iter/sec",
            "range": "stddev: 0.00004666796664695058",
            "extra": "mean: 686.7358654513073 usec\nrounds: 1427"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2912.563426388226,
            "unit": "iter/sec",
            "range": "stddev: 0.00023963526535955413",
            "extra": "mean: 343.3401624630256 usec\nrounds: 1071"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.525154172521892,
            "unit": "iter/sec",
            "range": "stddev: 0.0021794385749116397",
            "extra": "mean: 95.01048475001994 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 54427.57839920298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016900402249468648",
            "extra": "mean: 18.373038621439818 usec\nrounds: 7457"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "7adf14d4d4df8f02395ad9c7e29c4377b15c2a34",
          "message": "feat: support kinetiq earn vault",
          "timestamp": "2026-07-09T16:23:22Z",
          "url": "https://github.com/rotki/rotki/commit/7adf14d4d4df8f02395ad9c7e29c4377b15c2a34"
        },
        "date": 1783662638820,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 437.6868570285912,
            "unit": "iter/sec",
            "range": "stddev: 0.004960796723917957",
            "extra": "mean: 2.2847384698478086 msec\nrounds: 398"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 321.23969241943666,
            "unit": "iter/sec",
            "range": "stddev: 0.000037443432729695264",
            "extra": "mean: 3.1129403482752642 msec\nrounds: 290"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1453.1155400319244,
            "unit": "iter/sec",
            "range": "stddev: 0.000009897053407056477",
            "extra": "mean: 688.1765230987967 usec\nrounds: 1407"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3581.5687264913313,
            "unit": "iter/sec",
            "range": "stddev: 0.00017904712521613056",
            "extra": "mean: 279.20726261747484 usec\nrounds: 1169"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.331988823078417,
            "unit": "iter/sec",
            "range": "stddev: 0.002308701593800409",
            "extra": "mean: 88.24576299999762 msec\nrounds: 10"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50853.373693822876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017065322371931369",
            "extra": "mean: 19.664378729733503 usec\nrounds: 9017"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "647792ebd4bd7fa4287138845e090d46e041c90b",
          "message": "Merge pull request #12576 from yabirgb/spendle\n\nDecode spendle events",
          "timestamp": "2026-07-10T16:16:54Z",
          "url": "https://github.com/rotki/rotki/commit/647792ebd4bd7fa4287138845e090d46e041c90b"
        },
        "date": 1783745689873,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 392.94435431374905,
            "unit": "iter/sec",
            "range": "stddev: 0.006248856957030395",
            "extra": "mean: 2.5448895982904065 msec\nrounds: 351"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 314.0691728479505,
            "unit": "iter/sec",
            "range": "stddev: 0.000050416917935485753",
            "extra": "mean: 3.1840119516732304 msec\nrounds: 269"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1390.469379635491,
            "unit": "iter/sec",
            "range": "stddev: 0.000011331904277699074",
            "extra": "mean: 719.1816048924056 usec\nrounds: 1349"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1475.7776169847687,
            "unit": "iter/sec",
            "range": "stddev: 0.00042207542357530997",
            "extra": "mean: 677.6088676850565 usec\nrounds: 786"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.019168130517405,
            "unit": "iter/sec",
            "range": "stddev: 0.004253904929865267",
            "extra": "mean: 124.70121385713843 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45193.96727824887,
            "unit": "iter/sec",
            "range": "stddev: 0.000002717060101107007",
            "extra": "mean: 22.12684701573619 usec\nrounds: 8210"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "a2beea6a99fe57633e457e931fc828a6e60148d5",
          "message": "fix: CoinEx trade filtering, fees and market caching\n\n- Filter finished orders by time client-side since /spot/finished-order\n  has no start_time/end_time arguments (they were sent but are not part\n  of the API), and skip trades in delisted/unknown markets with a clear\n  error instead of a per-trade KeyError message.\n- Use actual_amount for withdrawals since amount includes the fee,\n  which is tracked as a separate fee event. Using amount double\n  counted the fee.\n- Cache the spot market map on the instance instead of re-downloading\n  and re-resolving ~thousands of assets on every history query.\n- Follow pagination.has_next instead of assuming pages of max limit,\n  guarding against a lower server-side page size silently truncating\n  history.\n- Accept both int and string millisecond timestamps since the docs\n  examples show both forms.\n- Record both base and quote trade fees when both are non-zero.\n- Guard against zero filled_amount, check HTTP status before parsing\n  the body, use lazy logging args and fix test typing/import order.\n- keep CoinEx api key in session headers",
          "timestamp": "2026-07-10T14:31:49Z",
          "url": "https://github.com/rotki/rotki/commit/a2beea6a99fe57633e457e931fc828a6e60148d5"
        },
        "date": 1783832802595,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 390.9123435870375,
            "unit": "iter/sec",
            "range": "stddev: 0.006008926327158843",
            "extra": "mean: 2.558118249283033 msec\nrounds: 349"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 308.0904394112696,
            "unit": "iter/sec",
            "range": "stddev: 0.00010029456924279374",
            "extra": "mean: 3.2458001679990502 msec\nrounds: 250"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1387.7986856269197,
            "unit": "iter/sec",
            "range": "stddev: 0.00006538934954086253",
            "extra": "mean: 720.5656053408518 usec\nrounds: 1348"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2437.393360621616,
            "unit": "iter/sec",
            "range": "stddev: 0.0004054418296543837",
            "extra": "mean: 410.274359549813 usec\nrounds: 890"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.418076423699475,
            "unit": "iter/sec",
            "range": "stddev: 0.003204011093917708",
            "extra": "mean: 106.17879437499766 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46103.20816367614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028961076891674783",
            "extra": "mean: 21.69046449977599 usec\nrounds: 6493"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "a2beea6a99fe57633e457e931fc828a6e60148d5",
          "message": "fix: CoinEx trade filtering, fees and market caching\n\n- Filter finished orders by time client-side since /spot/finished-order\n  has no start_time/end_time arguments (they were sent but are not part\n  of the API), and skip trades in delisted/unknown markets with a clear\n  error instead of a per-trade KeyError message.\n- Use actual_amount for withdrawals since amount includes the fee,\n  which is tracked as a separate fee event. Using amount double\n  counted the fee.\n- Cache the spot market map on the instance instead of re-downloading\n  and re-resolving ~thousands of assets on every history query.\n- Follow pagination.has_next instead of assuming pages of max limit,\n  guarding against a lower server-side page size silently truncating\n  history.\n- Accept both int and string millisecond timestamps since the docs\n  examples show both forms.\n- Record both base and quote trade fees when both are non-zero.\n- Guard against zero filled_amount, check HTTP status before parsing\n  the body, use lazy logging args and fix test typing/import order.\n- keep CoinEx api key in session headers",
          "timestamp": "2026-07-10T14:31:49Z",
          "url": "https://github.com/rotki/rotki/commit/a2beea6a99fe57633e457e931fc828a6e60148d5"
        },
        "date": 1783919591898,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 367.28479015916554,
            "unit": "iter/sec",
            "range": "stddev: 0.006258919970387881",
            "extra": "mean: 2.722682852090452 msec\nrounds: 311"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 306.35782945711503,
            "unit": "iter/sec",
            "range": "stddev: 0.000036775933940154176",
            "extra": "mean: 3.264156825278667 msec\nrounds: 269"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1463.172562753852,
            "unit": "iter/sec",
            "range": "stddev: 0.000015478576640546422",
            "extra": "mean: 683.4463859258609 usec\nrounds: 1350"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3015.8629529468085,
            "unit": "iter/sec",
            "range": "stddev: 0.00022692153437686239",
            "extra": "mean: 331.5800537364926 usec\nrounds: 1191"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.91660521204226,
            "unit": "iter/sec",
            "range": "stddev: 0.001050542732989936",
            "extra": "mean: 91.60356911110847 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 55290.409096293835,
            "unit": "iter/sec",
            "range": "stddev: 0.00000150517761773916",
            "extra": "mean: 18.08631942401437 usec\nrounds: 8196"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "committer": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "caa9c829f262992c0fc9266e7a8e926ffc31496a",
          "message": "test(frontend): add wallet store and walletconnect coverage",
          "timestamp": "2026-07-13T13:10:51Z",
          "url": "https://github.com/rotki/rotki/commit/caa9c829f262992c0fc9266e7a8e926ffc31496a"
        },
        "date": 1784004010619,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 396.04825813351846,
            "unit": "iter/sec",
            "range": "stddev: 0.0062922730809987825",
            "extra": "mean: 2.524944825443149 msec\nrounds: 338"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.50828287593083,
            "unit": "iter/sec",
            "range": "stddev: 0.00008778985448856531",
            "extra": "mean: 3.2309313040286516 msec\nrounds: 273"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1471.7611912222094,
            "unit": "iter/sec",
            "range": "stddev: 0.000017580532264590792",
            "extra": "mean: 679.4580574376744 usec\nrounds: 1358"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3004.4190000394074,
            "unit": "iter/sec",
            "range": "stddev: 0.00021681213782861764",
            "extra": "mean: 332.8430555081976 usec\nrounds: 1189"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.737367795488053,
            "unit": "iter/sec",
            "range": "stddev: 0.0013996171848161714",
            "extra": "mean: 93.13269499999895 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 55717.68374409959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016613642834030905",
            "extra": "mean: 17.94762331816958 usec\nrounds: 7359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "committer": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "f49d7ec2f6a1d71da5b9c29ba5b95aae459d4f48",
          "message": "test(frontend): cover account management and migration\n\nCover useBlockchainAccountManagement (single/multiple evm + account\naddition dispatch, task-running guard, no-new-address notify, xpub) and\nuseAccountMigration (deferred/immediate migration, chain filtering).",
          "timestamp": "2026-07-14T12:04:38Z",
          "url": "https://github.com/rotki/rotki/commit/f49d7ec2f6a1d71da5b9c29ba5b95aae459d4f48"
        },
        "date": 1784090419500,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 404.1542519394939,
            "unit": "iter/sec",
            "range": "stddev: 0.004613918866197212",
            "extra": "mean: 2.474302806913709 msec\nrounds: 347"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 306.7670566072158,
            "unit": "iter/sec",
            "range": "stddev: 0.00008576410708611342",
            "extra": "mean: 3.2598024411741147 msec\nrounds: 272"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1387.6488864134167,
            "unit": "iter/sec",
            "range": "stddev: 0.00001323474608868435",
            "extra": "mean: 720.6433917045453 usec\nrounds: 1302"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2530.5489041913684,
            "unit": "iter/sec",
            "range": "stddev: 0.00029067862332607093",
            "extra": "mean: 395.17118137637726 usec\nrounds: 1031"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.4601047280883,
            "unit": "iter/sec",
            "range": "stddev: 0.0015432485125641542",
            "extra": "mean: 105.7070750000122 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 44083.59087615655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029973303994538215",
            "extra": "mean: 22.684177493827278 usec\nrounds: 8389"
          }
        ]
      }
    ]
  }
}