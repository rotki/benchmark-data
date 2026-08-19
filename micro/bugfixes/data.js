window.BENCHMARK_DATA = {
  "lastUpdate": 1787107958843,
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
          "id": "914cfb91fe1448770ef2cf76d3ba7f019c30850c",
          "message": "feat(settings): derive search from the registry\n\nThe settings search is now fully derived from the settings registry: the\nper-tab getXTab builders and the hand-written search list are gone. A\nsetting's registry `search` block drives both its search row and its\nscroll-target anchor, and each settings tab's route/label/icon comes from\nits page `nav` meta.\n\nSettingsItem resolves its DOM id (and fallback title) from `setting-key`;\na composite item wrapping several settings under one anchor passes the\nrepresentative key. Rows with no registry value (change password, purge\ndata, rpc nodes, ...) live in a new `settingsActions` registry and resolve\nthrough a shared `anchorId(key)` helper, via `action-key` on a SettingsItem\nor `:id=\"anchorId('...')\"` on a bare section. No template restates a\nSettingsHighlightIds value anymore.\n\nA derived invariant - every highlight id is owned by exactly one of the\nsetting or action registries - replaces the hand-kept keyless allowlist.\n\nAdds unit coverage for the actions registry and the SettingsItem action-key\npath, plus an e2e spec that drives the search palette end to end.",
          "timestamp": "2026-07-15T16:45:23Z",
          "url": "https://github.com/rotki/rotki/commit/914cfb91fe1448770ef2cf76d3ba7f019c30850c"
        },
        "date": 1784177533115,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 410.0884649022033,
            "unit": "iter/sec",
            "range": "stddev: 0.005045622401620214",
            "extra": "mean: 2.43849824022355 msec\nrounds: 358"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 296.9311690826861,
            "unit": "iter/sec",
            "range": "stddev: 0.00013314148598947238",
            "extra": "mean: 3.3677838641504527 msec\nrounds: 265"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1371.7515748898393,
            "unit": "iter/sec",
            "range": "stddev: 0.00001327592827298624",
            "extra": "mean: 728.9949713236573 usec\nrounds: 1360"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1680.120590589844,
            "unit": "iter/sec",
            "range": "stddev: 0.001520480777364825",
            "extra": "mean: 595.1953720470311 usec\nrounds: 1016"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.614182711602442,
            "unit": "iter/sec",
            "range": "stddev: 0.004800143158997439",
            "extra": "mean: 116.08762357142714 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46794.11150477982,
            "unit": "iter/sec",
            "range": "stddev: 0.000002524146066365915",
            "extra": "mean: 21.370210221810797 usec\nrounds: 8296"
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
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "yabirgb@gmail.com"
          },
          "id": "7e019c445e5b30b2fa10e060584b0c1f003ede47",
          "message": "Vendor windows signal and remove pywin dep",
          "timestamp": "2026-07-16T14:51:52Z",
          "url": "https://github.com/rotki/rotki/commit/7e019c445e5b30b2fa10e060584b0c1f003ede47"
        },
        "date": 1784264100398,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 431.4082588549584,
            "unit": "iter/sec",
            "range": "stddev: 0.0047578621168528476",
            "extra": "mean: 2.3179899305919522 msec\nrounds: 389"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 324.35700681917723,
            "unit": "iter/sec",
            "range": "stddev: 0.00004004334056778779",
            "extra": "mean: 3.0830226539779386 msec\nrounds: 289"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1439.6410683169993,
            "unit": "iter/sec",
            "range": "stddev: 0.000007172555051680353",
            "extra": "mean: 694.6175835127028 usec\nrounds: 1395"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3605.3140014847722,
            "unit": "iter/sec",
            "range": "stddev: 0.00015000078052322658",
            "extra": "mean: 277.36835115836544 usec\nrounds: 1122"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.406862929955903,
            "unit": "iter/sec",
            "range": "stddev: 0.0007899428204039343",
            "extra": "mean: 87.66652200000318 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50487.65118376961,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015746306492088714",
            "extra": "mean: 19.806823580683282 usec\nrounds: 9211"
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
          "id": "cd3722d62d9fe67775b61f156a70846389d4a893",
          "message": "feat: decode GnosisDAO GIP-151 treasury redemption on gnosis chain",
          "timestamp": "2026-07-17T16:25:00Z",
          "url": "https://github.com/rotki/rotki/commit/cd3722d62d9fe67775b61f156a70846389d4a893"
        },
        "date": 1784349521658,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 399.30604602268113,
            "unit": "iter/sec",
            "range": "stddev: 0.005336625162963473",
            "extra": "mean: 2.5043447499996 msec\nrounds: 352"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 304.43301843722963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000399345197226423",
            "extra": "mean: 3.2847948134318017 msec\nrounds: 268"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1360.7975786543557,
            "unit": "iter/sec",
            "range": "stddev: 0.000015951474446413052",
            "extra": "mean: 734.8631535550383 usec\nrounds: 1322"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2489.6216370886705,
            "unit": "iter/sec",
            "range": "stddev: 0.0004011180816768735",
            "extra": "mean: 401.66746026893725 usec\nrounds: 969"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.812758620178602,
            "unit": "iter/sec",
            "range": "stddev: 0.007617635977919795",
            "extra": "mean: 113.47184724999693 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45230.33668930284,
            "unit": "iter/sec",
            "range": "stddev: 0.000003379439712242544",
            "extra": "mean: 22.109054966121974 usec\nrounds: 8387"
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
          "id": "cd3722d62d9fe67775b61f156a70846389d4a893",
          "message": "feat: decode GnosisDAO GIP-151 treasury redemption on gnosis chain",
          "timestamp": "2026-07-17T16:25:00Z",
          "url": "https://github.com/rotki/rotki/commit/cd3722d62d9fe67775b61f156a70846389d4a893"
        },
        "date": 1784437233072,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 396.62686386176523,
            "unit": "iter/sec",
            "range": "stddev: 0.005433257364926091",
            "extra": "mean: 2.521261394811941 msec\nrounds: 347"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 318.02661262656795,
            "unit": "iter/sec",
            "range": "stddev: 0.0001396458384086801",
            "extra": "mean: 3.1443909418178673 msec\nrounds: 275"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1363.7365291548354,
            "unit": "iter/sec",
            "range": "stddev: 0.00001651462040954934",
            "extra": "mean: 733.2794704998787 usec\nrounds: 1322"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2377.9957314942117,
            "unit": "iter/sec",
            "range": "stddev: 0.00028573053612644916",
            "extra": "mean: 420.5222014303831 usec\nrounds: 839"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.415000342436388,
            "unit": "iter/sec",
            "range": "stddev: 0.002102800570153971",
            "extra": "mean: 106.21348524998808 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45447.06423560556,
            "unit": "iter/sec",
            "range": "stddev: 0.000002683041805004354",
            "extra": "mean: 22.003621506019055 usec\nrounds: 8658"
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
          "id": "f1b6736a3ebaba23872904b4d85ab5431a2b98b2",
          "message": "fix: annotate touched_indices for mypy\n\nmypy can no longer infer the empty set's element type since the\nexact-page pagination fix reads the set before the first add call.\n\nClaude-Session: https://claude.ai/code/session_01WUGaBfx2snxLFx86TWKaMB",
          "timestamp": "2026-07-19T13:09:39Z",
          "url": "https://github.com/rotki/rotki/commit/f1b6736a3ebaba23872904b4d85ab5431a2b98b2"
        },
        "date": 1784524793054,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 511.31699439937086,
            "unit": "iter/sec",
            "range": "stddev: 0.004994191266490587",
            "extra": "mean: 1.9557339399107412 msec\nrounds: 416"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 396.68662873556116,
            "unit": "iter/sec",
            "range": "stddev: 0.000025509256183566862",
            "extra": "mean: 2.520881541148741 msec\nrounds: 316"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1845.9254270953488,
            "unit": "iter/sec",
            "range": "stddev: 0.000016187872294936213",
            "extra": "mean: 541.733693745986 usec\nrounds: 1773"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2429.161825441975,
            "unit": "iter/sec",
            "range": "stddev: 0.0009776993368598552",
            "extra": "mean: 411.6646283201222 usec\nrounds: 1243"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.172242844700694,
            "unit": "iter/sec",
            "range": "stddev: 0.029430680980239123",
            "extra": "mean: 98.30673680003201 msec\nrounds: 10"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 70439.07564041301,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011409887883885661",
            "extra": "mean: 14.196665571038102 usec\nrounds: 9446"
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
          "id": "b8733296abd13f15fbdcec7cad0b28a85a582022",
          "message": "feat: resolve bridge legs as external on both sides",
          "timestamp": "2026-07-20T16:21:24Z",
          "url": "https://github.com/rotki/rotki/commit/b8733296abd13f15fbdcec7cad0b28a85a582022"
        },
        "date": 1784610076130,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 410.65729413045597,
            "unit": "iter/sec",
            "range": "stddev: 0.004479048379455873",
            "extra": "mean: 2.4351205111732996 msec\nrounds: 358"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 312.2669206047464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004654188048093665",
            "extra": "mean: 3.202388514490638 msec\nrounds: 276"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1397.9698334397606,
            "unit": "iter/sec",
            "range": "stddev: 0.000013671128974886",
            "extra": "mean: 715.3230177645967 usec\nrounds: 1351"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2655.598318748495,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482542683481108",
            "extra": "mean: 376.5629737524727 usec\nrounds: 1143"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.910345158207303,
            "unit": "iter/sec",
            "range": "stddev: 0.0007475433915250161",
            "extra": "mean: 100.9046591249998 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 47095.46277642248,
            "unit": "iter/sec",
            "range": "stddev: 0.00000246836727258144",
            "extra": "mean: 21.23346796160229 usec\nrounds: 9473"
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
          "id": "bf4976168b293e9a9b0c2f043b0ca1ea96dab2f3",
          "message": "Merge pull request #12638 from yabirgb/dbupgrades\n\nAdd kraken in the defaults for oracles and remove stale files",
          "timestamp": "2026-07-21T21:07:31Z",
          "url": "https://github.com/rotki/rotki/commit/bf4976168b293e9a9b0c2f043b0ca1ea96dab2f3"
        },
        "date": 1784696388769,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 381.3798073989792,
            "unit": "iter/sec",
            "range": "stddev: 0.006685800179358121",
            "extra": "mean: 2.622058065475536 msec\nrounds: 336"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 312.24503930213746,
            "unit": "iter/sec",
            "range": "stddev: 0.00005821364483570696",
            "extra": "mean: 3.2026129293678567 msec\nrounds: 269"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1373.7100033118318,
            "unit": "iter/sec",
            "range": "stddev: 0.000015879784413692517",
            "extra": "mean: 727.9556803030721 usec\nrounds: 1320"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2323.245824945014,
            "unit": "iter/sec",
            "range": "stddev: 0.0004446013272778224",
            "extra": "mean: 430.432281105538 usec\nrounds: 868"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.447637251146093,
            "unit": "iter/sec",
            "range": "stddev: 0.0015328710067985902",
            "extra": "mean: 105.8465702500051 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45889.75871832639,
            "unit": "iter/sec",
            "range": "stddev: 0.000003784418681915845",
            "extra": "mean: 21.791354496720054 usec\nrounds: 7261"
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
          "id": "52070100bc0c33c18c14d5c0e4df018e829dcc02",
          "message": "Merge pull request #12656 from yabirgb/bundle-mcp\n\nMove MCP to the main dependencies of the project",
          "timestamp": "2026-07-22T16:16:58Z",
          "url": "https://github.com/rotki/rotki/commit/52070100bc0c33c18c14d5c0e4df018e829dcc02"
        },
        "date": 1784783126118,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 378.67212908044087,
            "unit": "iter/sec",
            "range": "stddev: 0.007765057858777948",
            "extra": "mean: 2.6408069757559876 msec\nrounds: 330"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 299.58269524762966,
            "unit": "iter/sec",
            "range": "stddev: 0.00005393787320415088",
            "extra": "mean: 3.3379765115385522 msec\nrounds: 260"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1479.7538701856292,
            "unit": "iter/sec",
            "range": "stddev: 0.000016116093554380164",
            "extra": "mean: 675.7880618852877 usec\nrounds: 1422"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2865.688034661109,
            "unit": "iter/sec",
            "range": "stddev: 0.00022663706111469056",
            "extra": "mean: 348.9563371535165 usec\nrounds: 1047"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.882897284093417,
            "unit": "iter/sec",
            "range": "stddev: 0.0016288689274583685",
            "extra": "mean: 91.88729562499987 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 55234.36683085131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016365197115638816",
            "extra": "mean: 18.1046702872938 usec\nrounds: 7549"
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
          "id": "4553441e10388f0cd7f7754f2400cfb46d7d55d4",
          "message": "Merge pull request #12671 from yabirgb/duplicate-address\n\nAdd test for special case of tx addresses",
          "timestamp": "2026-07-23T20:03:57Z",
          "url": "https://github.com/rotki/rotki/commit/4553441e10388f0cd7f7754f2400cfb46d7d55d4"
        },
        "date": 1784869277081,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 404.4636526208135,
            "unit": "iter/sec",
            "range": "stddev: 0.0053706493997207425",
            "extra": "mean: 2.4724100509904274 msec\nrounds: 353"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 320.4465244805283,
            "unit": "iter/sec",
            "range": "stddev: 0.00013996044097306623",
            "extra": "mean: 3.1206454856113264 msec\nrounds: 278"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1372.0835998374537,
            "unit": "iter/sec",
            "range": "stddev: 0.000016451941194192843",
            "extra": "mean: 728.8185647860428 usec\nrounds: 1312"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2579.0941079180698,
            "unit": "iter/sec",
            "range": "stddev: 0.00030031370781441783",
            "extra": "mean: 387.7330404229542 usec\nrounds: 1039"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.308682946413288,
            "unit": "iter/sec",
            "range": "stddev: 0.00206426421734282",
            "extra": "mean: 107.42658287500362 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46235.710968078056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027382129142820445",
            "extra": "mean: 21.628303730214455 usec\nrounds: 6756"
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
          "id": "0055beb3dd824eab95319e37a0298b329aa65b47",
          "message": "feat: decode solana stake program transactions\n\nAdd a decoder module for the native Solana Stake program, covering its\nfull instruction set. Previously staking transactions appeared as\nnear-empty events (fee only), since the base decoder only handles plain\nsystem transfers and SPL token transfers.\n\nDecoded events:\n- Initialize(Checked)/DelegateStake: staking deposit with the amount\n  recovered from the funding instruction in the same transaction\n  (createAccount, createAccountWithSeed parsing the variable-length\n  seed, or a plain transfer whose decoded spend event is transformed\n  in place). Delegating an account funded earlier yields an\n  informational event since the amount is not in the transaction.\n- Withdraw: unstake event with the amount from the instruction data.\n- Deactivate: informational start-of-unstaking event.\n- Split: deposit for the new account's rent-exempt reserve plus an\n  informational split event.\n- Merge, SetLockup(Checked), MoveStake/MoveLamports and all four\n  Authorize variants: informational events. Authority changes are\n  emitted when either the old or the new authority is tracked, so both\n  sides of a stake account sale see them.\n- GetMinimumDelegation, DeactivateDelinquent and Redelegate produce no\n  events (read-only, permissionless or retired).\n\nInstruction tags are parsed as a bincode enum via an IntEnum. Events\nuse the existing STAKING deposit/remove combos and a new solana-stake\ncounterparty rendered with the existing solana.svg icon.\n\nTests cover six real mainnet transactions: create+delegate, deactivate,\ndurable-nonce withdraw, a stake account sale (authorize x2 + payment),\na split funded via createAccountWithSeed, and a merge. They are not yet\nVCRed and query mainnet-beta live.\n\nNote: epoch rewards are credited by the runtime without transactions,\nso they cannot be decoded and would need a separate query task. SPL\nstake pool (liquid staking) deposits are a separate program and are\nnot covered by this module.",
          "timestamp": "2026-07-24T20:07:36Z",
          "url": "https://github.com/rotki/rotki/commit/0055beb3dd824eab95319e37a0298b329aa65b47"
        },
        "date": 1784955439482,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 514.8924923860709,
            "unit": "iter/sec",
            "range": "stddev: 0.004573328137764128",
            "extra": "mean: 1.9421530023983944 msec\nrounds: 417"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 398.78561575104453,
            "unit": "iter/sec",
            "range": "stddev: 0.00003589217021974016",
            "extra": "mean: 2.50761301436781 msec\nrounds: 348"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1816.8561988886797,
            "unit": "iter/sec",
            "range": "stddev: 0.000011596424243270546",
            "extra": "mean: 550.4012924147063 usec\nrounds: 1727"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2461.0640287979663,
            "unit": "iter/sec",
            "range": "stddev: 0.0009739379535843574",
            "extra": "mean: 406.3283150290162 usec\nrounds: 1038"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.837511452052773,
            "unit": "iter/sec",
            "range": "stddev: 0.009377421813915267",
            "extra": "mean: 84.47721499999794 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 70504.04781840932,
            "unit": "iter/sec",
            "range": "stddev: 0.000001058025384059307",
            "extra": "mean: 14.183582800460002 usec\nrounds: 10163"
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
          "id": "02259fa94b29adab0704b630e29457f7bbf99fba",
          "message": "refactor: cut the remaining complexity offenders\n\nTakes the rule to zero. The same shapes as the previous pass, with two\nrecurring causes.\n\nDefaulted and optional fields: iterateAssets and enqueue counted their\ndefaults as branches, and the Lido row builder paid for one optional\nchain per metric. Those resolve once, through a defaults constant or a\nhelper that flattens the optional groups.\n\nGuards ahead of the work: gas estimation, online event queries, the\naccount-form key warnings and the purge dispatch all led with a stack of\npreconditions. Each is now a named question, so the function that follows\nreads as the work rather than the eligibility.\n\nTwo sign-in steps and two export outcomes were duplicated blocks that\ncollapse into one helper each.\n\nbalance-transformations breached the line cap once its collection\ngrouping was extracted, so the pure part moves to balance-grouping.ts,\ntaking the protocol sorting and the two balance types that only it and\nits callers need.\n\nThree of these lost TypeScript narrowing on extraction, since a boolean\nhelper discards what an inline `in` or discriminant check proves. The\nsign-in reporter is a type predicate, and the xpub and group checks stay\nat the sites that depend on them.",
          "timestamp": "2026-07-26T01:23:32Z",
          "url": "https://github.com/rotki/rotki/commit/02259fa94b29adab0704b630e29457f7bbf99fba"
        },
        "date": 1785042717680,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 388.9672059842112,
            "unit": "iter/sec",
            "range": "stddev: 0.006118007520290373",
            "extra": "mean: 2.5709108238821337 msec\nrounds: 335"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 306.42676107736594,
            "unit": "iter/sec",
            "range": "stddev: 0.00003167380822859256",
            "extra": "mean: 3.263422543396992 msec\nrounds: 265"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1358.762580681322,
            "unit": "iter/sec",
            "range": "stddev: 0.00002782866126850523",
            "extra": "mean: 735.9637468810567 usec\nrounds: 1363"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2524.550815319898,
            "unit": "iter/sec",
            "range": "stddev: 0.00024791468273413183",
            "extra": "mean: 396.1100699307117 usec\nrounds: 1001"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.275255371112827,
            "unit": "iter/sec",
            "range": "stddev: 0.003285464240017087",
            "extra": "mean: 107.81374312500702 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46392.642784761716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026754265370999006",
            "extra": "mean: 21.55514193574813 usec\nrounds: 8849"
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
          "id": "a115f4f1ae7f36efd1be4937c2c3a43875427a27",
          "message": "fix: hold async task patches for task lifetime\n\nTwo api tests were failing on the nightlies only: test_async_task_death_traceback\nand test_query_async_task_that_died. Both inject their fault with a mock.patch\nscoped to the HTTP request that spawns the async task, but _query_async returns\nthe task id right after task.start(), so the with block exits while the task\nthread is still starting.\n\nUnder gevent this was safe by construction: the main greenlet blocked on the\nloopback read and handed control to the new greenlet, which ran until its own\nfirst blocking I/O, precisely the patched call. Since api tasks became real OS\nthreads it is a race between the main thread restoring the attribute and the new\nthread reaching the patched call. On an idle machine the task wins, on a\nsaturated nightly it loses and runs unpatched, so no death is ever logged and\nthe binance query hits the live API with the fake key and returns empty balances.\n\nHold the patches open for the whole lifetime of the task by moving the waits and\nthe polling loops inside the with block. test_async_task_death_traceback also\nasserts the task is really dead, since wait() returns silently on timeout and\nwould otherwise fail on the caplog assertion instead.\n\ntest_cancel_async_task gets the same treatment for consistency. It is not\nreproducibly broken today, as the task is cancelled at its first checkpoint\nbefore it reaches the request, but it has the same latent scope bug.",
          "timestamp": "2026-07-26T12:52:07Z",
          "url": "https://github.com/rotki/rotki/commit/a115f4f1ae7f36efd1be4937c2c3a43875427a27"
        },
        "date": 1785129897122,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 400.5742424132048,
            "unit": "iter/sec",
            "range": "stddev: 0.0047066459171760475",
            "extra": "mean: 2.4964161299429457 msec\nrounds: 354"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 299.67819051898954,
            "unit": "iter/sec",
            "range": "stddev: 0.00003697631242330745",
            "extra": "mean: 3.336912833957577 msec\nrounds: 265"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1363.2087665362887,
            "unit": "iter/sec",
            "range": "stddev: 0.000013788705774474791",
            "extra": "mean: 733.563357680608 usec\nrounds: 1328"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2763.1908738844554,
            "unit": "iter/sec",
            "range": "stddev: 0.00021067351957323544",
            "extra": "mean: 361.900442510587 usec\nrounds: 1322"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.6956683267387,
            "unit": "iter/sec",
            "range": "stddev: 0.0010153364671287356",
            "extra": "mean: 103.13884162499676 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45177.51374808312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025690394863471808",
            "extra": "mean: 22.13490555447908 usec\nrounds: 9275"
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
          "id": "b5257f2db520438cf967b79b2212f64ae2be181c",
          "message": "chore(dev): gate vue devtools behind its own flag\n\nENABLE_DEV_TOOLS drove two unrelated things: the vite-plugin-vue-devtools\nplugin here, and Electron opening its Chrome DevTools window in\nelectron/main/window-manager.ts. The Vite plugin breaks Vue SFC hot\nreload, so every .vue edit needs a manual page reload while it is\ninstalled, and there was no way to keep the Electron devtools without\npaying that cost.\n\nGive the plugin its own ENABLE_VUE_DEVTOOLS flag. It stays out of the\nmanaged dev flags, which default to on for instance runs, so the Vue\nDevTools panel is now opt-in.",
          "timestamp": "2026-07-27T17:37:30Z",
          "url": "https://github.com/rotki/rotki/commit/b5257f2db520438cf967b79b2212f64ae2be181c"
        },
        "date": 1785214574192,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 392.3728216687259,
            "unit": "iter/sec",
            "range": "stddev: 0.00567414742848229",
            "extra": "mean: 2.5485964999999005 msec\nrounds: 338"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 308.46321414176884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000352561951954949",
            "extra": "mean: 3.241877650734725 msec\nrounds: 272"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1380.1433271387468,
            "unit": "iter/sec",
            "range": "stddev: 0.00024261417419953145",
            "extra": "mean: 724.5624279277984 usec\nrounds: 1332"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2346.3950919008994,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604894384829311",
            "extra": "mean: 426.18568520353665 usec\nrounds: 1007"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.453840345879266,
            "unit": "iter/sec",
            "range": "stddev: 0.0027514677947240106",
            "extra": "mean: 105.7771195000008 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45863.828480237244,
            "unit": "iter/sec",
            "range": "stddev: 0.00000266513999460129",
            "extra": "mean: 21.803674772395 usec\nrounds: 9006"
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
          "id": "56ec63ca8a94a6beb5d0bec060f2c25e7846eca5",
          "message": "chore(deps): bump electron to 43, c8 to 12\n\nBoth are majors. electron 43.1.1 is preferred over 43.2.0, which is\nright on the 7 day minimumReleaseAge boundary.\n\nNative modules rebuild cleanly against the new ABI and electron-builder\n26.15.3 packages it without changes. The resulting AppImage was launched\nand loads the frontend.\n\nc8 is only used by the e2e coverage report script.",
          "timestamp": "2026-07-28T17:38:02Z",
          "url": "https://github.com/rotki/rotki/commit/56ec63ca8a94a6beb5d0bec060f2c25e7846eca5"
        },
        "date": 1785301255566,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 410.7565879310345,
            "unit": "iter/sec",
            "range": "stddev: 0.005078836309597975",
            "extra": "mean: 2.4345318599440176 msec\nrounds: 357"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 302.43406671997,
            "unit": "iter/sec",
            "range": "stddev: 0.000034325655077164565",
            "extra": "mean: 3.306505814128144 msec\nrounds: 269"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1396.6909298550702,
            "unit": "iter/sec",
            "range": "stddev: 0.000016081014467596575",
            "extra": "mean: 715.9780153392752 usec\nrounds: 1369"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2566.3803583745366,
            "unit": "iter/sec",
            "range": "stddev: 0.00026641856236667665",
            "extra": "mean: 389.65385498561403 usec\nrounds: 993"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.776498920471386,
            "unit": "iter/sec",
            "range": "stddev: 0.0014697526770233497",
            "extra": "mean: 102.28610550000283 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46021.35763090711,
            "unit": "iter/sec",
            "range": "stddev: 0.000002581746028361746",
            "extra": "mean: 21.729041720586228 usec\nrounds: 9300"
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
          "id": "b4aa10d79f4a59e881782bafc9bd81ee3a31a9ba",
          "message": "fix: skip settings suggestions on new accounts\n\nA new account starts with `lastAppliedSettingsVersion` at its `0.0.0`\ndefault, so every recommendation from the current and earlier versions\nwas pending on first login. The account is already created on the\ncurrent defaults, so applying one moved it away from them: since kraken\nwas added to the default current-price oracles, the 1.43 oracle\nsuggestion offered to remove it from an account that had just been\ngiven it.\n\nAccount creation now stamps the running version instead of showing the\ndialog. Restoring a premium backup is excluded: the pulled database\nbelongs to an existing account and its recommendations still apply.\n\nThe stamp is awaited rather than fire-and-forget. Writing a frontend\nsetting rewrites the whole blob from a snapshot of the repo, so the\nprivacy reset that follows in `initialize` could snapshot the pre-stamp\nversion and put it back, bringing the dialog around again on the next\nlogin.",
          "timestamp": "2026-07-29T15:32:52Z",
          "url": "https://github.com/rotki/rotki/commit/b4aa10d79f4a59e881782bafc9bd81ee3a31a9ba"
        },
        "date": 1785386909080,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 384.7945892693916,
            "unit": "iter/sec",
            "range": "stddev: 0.0066183369492105225",
            "extra": "mean: 2.5987891407171215 msec\nrounds: 334"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 299.0731897170191,
            "unit": "iter/sec",
            "range": "stddev: 0.00013924449212653542",
            "extra": "mean: 3.343663137930193 msec\nrounds: 261"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1374.5714267685864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000171117224415309",
            "extra": "mean: 727.4994813116781 usec\nrounds: 1311"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2501.944085646197,
            "unit": "iter/sec",
            "range": "stddev: 0.0002648752348451261",
            "extra": "mean: 399.6891879946717 usec\nrounds: 883"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.9916831089892,
            "unit": "iter/sec",
            "range": "stddev: 0.003906658321779179",
            "extra": "mean: 111.21388375000407 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45922.166805064146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031086983311346795",
            "extra": "mean: 21.77597595176461 usec\nrounds: 7984"
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
          "id": "223c359bd6bdbf1e8d2a5c0f8719cda7b740ca43",
          "message": "fix: retry bitcoin txs with unplaceable TxIOs via the next explorer\n\nAddress review findings on the bitcoin transaction saving PR:\n\n- blockchain.info returning a transaction incomplete and without the real\n  index of its TxIOs was skipped, which cached a block height past it as\n  soon as a newer transaction of the same response was kept, so nothing\n  ever queried it again and the explorer fallback never ran. Raise a\n  dedicated UnplaceableTxIOsError that the processing loop does not\n  swallow, so the api loop falls back to blockcypher which returns it\n  whole.\n- Lock the location selector of the bitcoin event form outside the add\n  flow, as the evm form does. The location picks the asset, so leaving it\n  editable let an event of a saved BTC transaction be relabelled as BCH.\n- Give reset_events_for_redecode a bitcoin branch. It deleted the events\n  while leaving the transactions marked as decoded, so nothing would ever\n  produce them again. Scoped by location since both chains share the\n  tables and every transaction id from before the fork.\n- Re-derive the counterparty addresses of a bitcoin event restored from\n  backup. Replacing the event cascades them away and they have no backup\n  table, so a restored event dropped out of the per-address balances and\n  the address filters.\n- Keep the tracked accounts as a set as well as a list. Membership was a\n  list scan run once per TxIO saved and once per address decoded, which a\n  full history redecode of an xpub wallet repeats millions of times.",
          "timestamp": "2026-07-30T19:19:42Z",
          "url": "https://github.com/rotki/rotki/commit/223c359bd6bdbf1e8d2a5c0f8719cda7b740ca43"
        },
        "date": 1785474870455,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 479.51348212514773,
            "unit": "iter/sec",
            "range": "stddev: 0.006567175664298922",
            "extra": "mean: 2.0854470985218536 msec\nrounds: 406"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 383.177478428532,
            "unit": "iter/sec",
            "range": "stddev: 0.000066821230234841",
            "extra": "mean: 2.6097567218750672 msec\nrounds: 320"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1872.4661826404838,
            "unit": "iter/sec",
            "range": "stddev: 0.000010655128358090548",
            "extra": "mean: 534.0550388951946 usec\nrounds: 1774"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 371.8735070558448,
            "unit": "iter/sec",
            "range": "stddev: 0.009875084916816382",
            "extra": "mean: 2.6890864259653444 msec\nrounds: 932"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 4.221304787479065,
            "unit": "iter/sec",
            "range": "stddev: 0.0881235791347893",
            "extra": "mean: 236.89357919999736 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 70852.26752148298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012348832412228378",
            "extra": "mean: 14.113874332910967 usec\nrounds: 7870"
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
          "id": "ded17c35fd4e9596a1167f647e6eee123144571e",
          "message": "docs: changelog for the history events filter redesign",
          "timestamp": "2026-07-30T18:27:23Z",
          "url": "https://github.com/rotki/rotki/commit/ded17c35fd4e9596a1167f647e6eee123144571e"
        },
        "date": 1785560714903,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 506.8662419647891,
            "unit": "iter/sec",
            "range": "stddev: 0.005167202231044392",
            "extra": "mean: 1.97290708515851 msec\nrounds: 411"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 400.25042150684015,
            "unit": "iter/sec",
            "range": "stddev: 0.0001058687895396888",
            "extra": "mean: 2.498435844827487 msec\nrounds: 348"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1867.4290535279195,
            "unit": "iter/sec",
            "range": "stddev: 0.00001150462182861029",
            "extra": "mean: 535.4955777895898 usec\nrounds: 1819"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2672.529041796128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005172732029158696",
            "extra": "mean: 374.17741186749817 usec\nrounds: 1146"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 12.119744809415344,
            "unit": "iter/sec",
            "range": "stddev: 0.005763969341604697",
            "extra": "mean: 82.50998810000851 msec\nrounds: 10"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 71561.54722350658,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011203582508491445",
            "extra": "mean: 13.973985174981228 usec\nrounds: 9511"
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
          "id": "c192c9eee8bf4c505360fb817676063a37d91e03",
          "message": "fix(e2e): key the core cache on bundled data\n\nThe spec bundles global.db, nodes.json and the populate_*.sql files\ninto the frozen core. None are .py, so a data-only change kept the key\nunchanged and restored a stale core - the suite would then pass against\nthe old data without failing.",
          "timestamp": "2026-08-01T20:36:04Z",
          "url": "https://github.com/rotki/rotki/commit/c192c9eee8bf4c505360fb817676063a37d91e03"
        },
        "date": 1785647276211,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 563.1660993320216,
            "unit": "iter/sec",
            "range": "stddev: 0.0034314904610301704",
            "extra": "mean: 1.7756750649339732 msec\nrounds: 462"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 422.8593916421099,
            "unit": "iter/sec",
            "range": "stddev: 0.0001373270344796404",
            "extra": "mean: 2.364852288408808 msec\nrounds: 371"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 2049.2978234426228,
            "unit": "iter/sec",
            "range": "stddev: 0.000032331537823248365",
            "extra": "mean: 487.9720207383505 usec\nrounds: 1977"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1675.0510038288405,
            "unit": "iter/sec",
            "range": "stddev: 0.0010075623620118862",
            "extra": "mean: 596.9967467940945 usec\nrounds: 936"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.89896583128136,
            "unit": "iter/sec",
            "range": "stddev: 0.007966277958975669",
            "extra": "mean: 101.0206537777852 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 69671.163122597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018174788505654276",
            "extra": "mean: 14.353140599078962 usec\nrounds: 10249"
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
          "id": "71d5d7b7a30fcc1d55181c937f1ea65e1b227572",
          "message": "chore: upgrade ruff to 0.16.0 and enable S324, TID252, E402\n\nBump ruff from 0.15.22 to 0.16.0, the newest version past the repo's\none week uv exclude-newer quarantine. The upgrade needed no rule\nchanges on its own: the expanded default rule set does not apply since\nwe select explicitly, and the twelve newly stabilized rules were\nalready running under preview.\n\nWhile at it, enable three rules that were globally ignored:\n\n- S324: the two md5 uses are non adversarial (an http etag and a local\n  file fingerprint) so they now pass usedforsecurity=False, which both\n  documents the intent and satisfies the rule. Digests are unchanged.\n- TID252: rewrite the six parent relative imports to absolute ones.\n  Sibling '.constants' imports stay as they are. This matters most in\n  the decoder tree, where '..constants' and '.constants' are different\n  modules that read almost identically.\n- E402: eth2.py had a constant sitting in the middle of its import\n  block, which is now moved below them. The two deliberate cases, test\n  setup that configures logging before importing fixtures and the\n  bench launcher that patches requests before importing the app, get\n  per file ignores with the reason attached.\n\nRUF069 stays ignored: it still misfires on our FVal Decimal wrapper\nand the upstream issue is open.",
          "timestamp": "2026-08-02T18:59:32Z",
          "url": "https://github.com/rotki/rotki/commit/71d5d7b7a30fcc1d55181c937f1ea65e1b227572"
        },
        "date": 1785734140406,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 414.17592593422137,
            "unit": "iter/sec",
            "range": "stddev: 0.00443340965720329",
            "extra": "mean: 2.4144329435478054 msec\nrounds: 372"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 313.80546056146403,
            "unit": "iter/sec",
            "range": "stddev: 0.00002895767625704606",
            "extra": "mean: 3.186687695653191 msec\nrounds: 276"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1388.7054703100766,
            "unit": "iter/sec",
            "range": "stddev: 0.000012060613597652251",
            "extra": "mean: 720.095096749864 usec\nrounds: 1354"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2347.4256584425134,
            "unit": "iter/sec",
            "range": "stddev: 0.0004111319828300245",
            "extra": "mean: 425.99858121321165 usec\nrounds: 1022"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.259046236896644,
            "unit": "iter/sec",
            "range": "stddev: 0.004236984168874838",
            "extra": "mean: 108.00248475000274 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46032.63516867639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026590296202633148",
            "extra": "mean: 21.72371832148478 usec\nrounds: 7221"
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
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "86f98275d7b1e8cc1aa5fd0ecb562ca6c247d921",
          "message": "Restart MCP after logout",
          "timestamp": "2026-08-03T14:46:58Z",
          "url": "https://github.com/rotki/rotki/commit/86f98275d7b1e8cc1aa5fd0ecb562ca6c247d921"
        },
        "date": 1785819339703,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 424.971745209921,
            "unit": "iter/sec",
            "range": "stddev: 0.004788938402743294",
            "extra": "mean: 2.353097614774449 msec\nrounds: 379"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 327.25446072709,
            "unit": "iter/sec",
            "range": "stddev: 0.00004025340122862864",
            "extra": "mean: 3.0557261092124217 msec\nrounds: 293"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1423.2252166083522,
            "unit": "iter/sec",
            "range": "stddev: 0.000009944066115506224",
            "extra": "mean: 702.6294843082331 usec\nrounds: 1402"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3559.1522978875673,
            "unit": "iter/sec",
            "range": "stddev: 0.00015315111646757476",
            "extra": "mean: 280.9657795744007 usec\nrounds: 1175"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.7926952356096,
            "unit": "iter/sec",
            "range": "stddev: 0.03564680570910683",
            "extra": "mean: 102.11693266667352 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 51178.8508335159,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013811058268478007",
            "extra": "mean: 19.53932110068251 usec\nrounds: 8284"
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
          "id": "ffacf466b31708c5ab531628d97b357aa3774708",
          "message": "Merge pull request #12759 from kelsos/feat/starling-public-health\n\nServe a public /health endpoint on the starling proxy",
          "timestamp": "2026-08-04T15:32:38Z",
          "url": "https://github.com/rotki/rotki/commit/ffacf466b31708c5ab531628d97b357aa3774708"
        },
        "date": 1785905763718,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 402.7990179667342,
            "unit": "iter/sec",
            "range": "stddev: 0.0050177108730261365",
            "extra": "mean: 2.482627701149427 msec\nrounds: 348"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 311.5730433742402,
            "unit": "iter/sec",
            "range": "stddev: 0.00005128960437478926",
            "extra": "mean: 3.2095202754715473 msec\nrounds: 265"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1321.0091624651277,
            "unit": "iter/sec",
            "range": "stddev: 0.00008035092110058218",
            "extra": "mean: 756.9970204702485 usec\nrounds: 1319"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2389.2523430191154,
            "unit": "iter/sec",
            "range": "stddev: 0.0002640789391347255",
            "extra": "mean: 418.5409728368735 usec\nrounds: 994"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.47409528030117,
            "unit": "iter/sec",
            "range": "stddev: 0.0017563024164184106",
            "extra": "mean: 105.55097562500038 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 44859.9369424869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030821772331809637",
            "extra": "mean: 22.291605119330846 usec\nrounds: 9337"
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
          "id": "c843a513a9f1dce6d2345c2203a2823cce14736b",
          "message": "test(e2e): address history rows by event id\n\nReading a row and then re-querying nth(0) to delete it deleted a different\nswap: the list sorts timestamp DESC and re-renders under the test, so the index\nno longer names the row that was read. Rows carry the id of the event they\nstand for, and the spec addresses them by it throughout.\n\nThe id is on both the collapsed row and the collapse header, so a swap that\nmerely expands still matches and only a real deletion clears it.",
          "timestamp": "2026-08-05T17:41:18Z",
          "url": "https://github.com/rotki/rotki/commit/c843a513a9f1dce6d2345c2203a2823cce14736b"
        },
        "date": 1785992222513,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 383.3083985923105,
            "unit": "iter/sec",
            "range": "stddev: 0.005989268609046818",
            "extra": "mean: 2.608865351431047 msec\nrounds: 350"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 294.69673718478657,
            "unit": "iter/sec",
            "range": "stddev: 0.00015263876478370254",
            "extra": "mean: 3.393318872658438 msec\nrounds: 267"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1380.7807085944685,
            "unit": "iter/sec",
            "range": "stddev: 0.000012300763518342623",
            "extra": "mean: 724.2279630470252 usec\nrounds: 1326"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2480.448028032208,
            "unit": "iter/sec",
            "range": "stddev: 0.00028249773246820283",
            "extra": "mean: 403.15297426059 usec\nrounds: 1049"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.26264943183271,
            "unit": "iter/sec",
            "range": "stddev: 0.008781722921679735",
            "extra": "mean: 107.96047150001442 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45247.21957077779,
            "unit": "iter/sec",
            "range": "stddev: 0.000002612885678643257",
            "extra": "mean: 22.100805518795553 usec\nrounds: 9024"
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
          "id": "98069d05fd7ac26405014dfea13e84eb30999fc2",
          "message": "Merge pull request #12737 from LefterisJP/indexer_fallback\n\nIndexer fallback fix",
          "timestamp": "2026-08-06T16:19:33Z",
          "url": "https://github.com/rotki/rotki/commit/98069d05fd7ac26405014dfea13e84eb30999fc2"
        },
        "date": 1786076620157,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 400.4795455839939,
            "unit": "iter/sec",
            "range": "stddev: 0.005217080193725408",
            "extra": "mean: 2.4970064289844403 msec\nrounds: 345"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 315.92141099615156,
            "unit": "iter/sec",
            "range": "stddev: 0.00004401779139780541",
            "extra": "mean: 3.165344181158338 msec\nrounds: 276"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1377.3660758263488,
            "unit": "iter/sec",
            "range": "stddev: 0.00001711606554522657",
            "extra": "mean: 726.0233989718756 usec\nrounds: 1168"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2268.4343278721194,
            "unit": "iter/sec",
            "range": "stddev: 0.00042497856918473776",
            "extra": "mean: 440.8326869828492 usec\nrounds: 968"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.261278110696335,
            "unit": "iter/sec",
            "range": "stddev: 0.0033198703897424674",
            "extra": "mean: 107.97645725000393 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46317.82828202985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028004501193618755",
            "extra": "mean: 21.58995870685014 usec\nrounds: 8815"
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
          "id": "d192e77b68d459bc101f066322b963f6b593206b",
          "message": "Merge pull request #12809 from yabirgb/across-prices\n\nAdd logic to ensure across LP token prices",
          "timestamp": "2026-08-07T20:41:34Z",
          "url": "https://github.com/rotki/rotki/commit/d192e77b68d459bc101f066322b963f6b593206b"
        },
        "date": 1786159318078,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 395.4717164649225,
            "unit": "iter/sec",
            "range": "stddev: 0.0056741166430100565",
            "extra": "mean: 2.528625836858545 msec\nrounds: 331"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.9036408974849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000856009853081064",
            "extra": "mean: 3.226809459559711 msec\nrounds: 272"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1475.3658831949429,
            "unit": "iter/sec",
            "range": "stddev: 0.000014040911029040472",
            "extra": "mean: 677.7979695683855 usec\nrounds: 1413"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3354.4495838261555,
            "unit": "iter/sec",
            "range": "stddev: 0.00020576007927395457",
            "extra": "mean: 298.1115008619027 usec\nrounds: 1160"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.804045272239339,
            "unit": "iter/sec",
            "range": "stddev: 0.0014681804828192957",
            "extra": "mean: 92.55792388888533 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 54760.16518207374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017699203160247397",
            "extra": "mean: 18.2614496628173 usec\nrounds: 8304"
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
          "id": "dc2c9bfdcbac9f02963de9838b986b78ae519ef4",
          "message": "fix(accounts): bound a read that never starts\n\n`release()` was documented as the guarantee that a waiter cannot outlive the load,\nand it is not: its caller sits behind `allSettled([fetchCached(), fetchNetValue()])`,\nand allSettled cannot settle if fetchCached never settles. A poisoned\n`prices:exchange-rates` id did exactly that, and the history sync waited forever.\n\nThe bound covers the arm→track window only, which is the one state that can hang\nwith nothing to settle it. Once a read is in flight the wait stays open: that promise\nsettles on rejection too and its requests carry their own timeouts, so expiring\nmid-read would release waiters into a half-filled store — the bug this prevents.",
          "timestamp": "2026-08-08T11:36:22Z",
          "url": "https://github.com/rotki/rotki/commit/dc2c9bfdcbac9f02963de9838b986b78ae519ef4"
        },
        "date": 1786246180930,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 486.2609834666607,
            "unit": "iter/sec",
            "range": "stddev: 0.003920932524108766",
            "extra": "mean: 2.0565088172832247 msec\nrounds: 405"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 371.28550139292264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000844160096960639",
            "extra": "mean: 2.6933451380363054 msec\nrounds: 326"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1746.5931079587895,
            "unit": "iter/sec",
            "range": "stddev: 0.00001457960675891855",
            "extra": "mean: 572.543195918528 usec\nrounds: 1715"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2145.359452885348,
            "unit": "iter/sec",
            "range": "stddev: 0.0007208699309289286",
            "extra": "mean: 466.12235476673834 usec\nrounds: 902"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.649228612078677,
            "unit": "iter/sec",
            "range": "stddev: 0.008122450099703731",
            "extra": "mean: 103.63522725000252 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 59720.971616751725,
            "unit": "iter/sec",
            "range": "stddev: 0.000001848807023095489",
            "extra": "mean: 16.744536683316454 usec\nrounds: 9214"
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
          "id": "8cfedb09a2c3052b78a8d7b3eb2e97f3a05d0895",
          "message": "fix(balances): stop a failed run reading as a settled, empty portfolio\n\neverCompleted for a kind must mean we have data, not that a run happened. The run\numbrella settles COMPLETE whenever its children settle, allSettled on purpose because a\nfailure belongs to the subject that failed, so sharing its children's kind wrote a\nsuccess to the completion ledger even when every chain FAILED. Backend unreachable at\nlogin then read as a settled, empty portfolio. ActivitySpec gains container, opt-in per\numbrella: HISTORY_SYNC's umbrella IS the subject for its kind and its entry is\nload-bearing.\n\ndetect is now part of the chain job's identity. submitTask dedups by id, so a login\nsweep landing while any plain background refresh was in flight joined it and never\ndetected, with no row, no log and no error, while withDetection still recorded the\nsweep, suppressing the next login's too.\n\nHydration's reset now bumps a generation. Clearing the map was not enough: an abandoned\nread still ran its own teardown later, deleting the next session's inflight entry and\nclearing its hydrating flag mid-load.\n\nbalances-cached is dropped from STATIC_LANES. It had no constant, no cap and no producer\nonce the cached read stopped being an activity.",
          "timestamp": "2026-08-09T20:57:14Z",
          "url": "https://github.com/rotki/rotki/commit/8cfedb09a2c3052b78a8d7b3eb2e97f3a05d0895"
        },
        "date": 1786333179001,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 386.50686542658985,
            "unit": "iter/sec",
            "range": "stddev: 0.006533500441003349",
            "extra": "mean: 2.5872761636363024 msec\nrounds: 330"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 293.2541968695777,
            "unit": "iter/sec",
            "range": "stddev: 0.00004838340842147047",
            "extra": "mean: 3.410010873415535 msec\nrounds: 237"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1385.339508856717,
            "unit": "iter/sec",
            "range": "stddev: 0.00001919246570294538",
            "extra": "mean: 721.84471287134 usec\nrounds: 1313"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2401.6797298292154,
            "unit": "iter/sec",
            "range": "stddev: 0.0002947535374096612",
            "extra": "mean: 416.3752508629077 usec\nrounds: 869"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.162206823152957,
            "unit": "iter/sec",
            "range": "stddev: 0.004785527250257498",
            "extra": "mean: 109.14401075000768 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 47221.796854692584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030641124447567285",
            "extra": "mean: 21.176661343004923 usec\nrounds: 8265"
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
          "id": "b4f7bdabfc2d5b2aa8a26dd062093fdaf93b37b7",
          "message": "feat(assets): filter asset locations from the pill bar\n\nThe per-asset locations table filtered through three selectors of its own\nabove the table: a location picker, an account picker and a tag picker.\nThey are now fields on the pill bar, like every other table, and the last\nuser of TagFilter.vue goes with them.\n\nPicking a location also used to compare the row's location through\ngetChainName with the picked one through toSentenceCase. The two disagree\non any id that is more than one word: polygon_pos reads as Polygon PoS on\none side and Polygon_pos on the other, so picking such a location matched\nnothing and left the table empty under an unchanged filter. Both sides are\nthe raw id the row already carries, so they are now compared as they are.\nThe test that covered this only used single-word ids, where the two\nformatters happen to agree; it now uses one of each.",
          "timestamp": "2026-08-10T20:37:11Z",
          "url": "https://github.com/rotki/rotki/commit/b4f7bdabfc2d5b2aa8a26dd062093fdaf93b37b7"
        },
        "date": 1786419155753,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 401.2118391483197,
            "unit": "iter/sec",
            "range": "stddev: 0.00534874731805259",
            "extra": "mean: 2.4924488821734907 msec\nrounds: 331"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 310.5467185825474,
            "unit": "iter/sec",
            "range": "stddev: 0.00003802002655500523",
            "extra": "mean: 3.2201274080897653 msec\nrounds: 272"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1393.936470231503,
            "unit": "iter/sec",
            "range": "stddev: 0.000016078248518756946",
            "extra": "mean: 717.3928090380771 usec\nrounds: 1372"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3261.8363783480204,
            "unit": "iter/sec",
            "range": "stddev: 0.00020663128359460926",
            "extra": "mean: 306.57577021274653 usec\nrounds: 1175"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.032181518257158,
            "unit": "iter/sec",
            "range": "stddev: 0.0007372920856111505",
            "extra": "mean: 90.64390377778864 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 54876.875610630384,
            "unit": "iter/sec",
            "range": "stddev: 0.000001572810291620291",
            "extra": "mean: 18.222611780877088 usec\nrounds: 8369"
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
          "id": "70e394bcf38cc49bf90a9afa259528be4d851abd",
          "message": "chore(deps): update @rotki/ui-library to 2.23.4\n\nTwo releases in one step, since the app was still on 2.23.2.\n\n2.23.3 carries the persistent-menu escape fix (#567), the icon registration\nwarning fix (#568) and the category picker's selection overlay fix (#559).\n2.23.4 adds a track behind the circular progress arc with a label that scales\nwith its size, the menu select's clear button no longer overlapping the\nchevron, and a consumer class now beating the variant class on both\nRuiNavigationDrawer and RuiIcon.\n\nDrop the `mr-16` that held the direction badge clear of the category picker's\nchevron: #559 shipped, so the selection layer no longer overflows the field.\n\nTwo visible knock-on effects from the class-merge fixes, both of them the\nmarkup finally doing what it already asked for:\n- `HistoryRedecodeSelection`'s chevron carries `size-4`, which until now lost\n  to the icon's own box and rendered at the button's icon size.\n- `PinnedSidebar` can drop the `!` from `!z-[6]` whenever convenient; the\n  important flag still works, so nothing is urgent.",
          "timestamp": "2026-08-11T16:09:38Z",
          "url": "https://github.com/rotki/rotki/commit/70e394bcf38cc49bf90a9afa259528be4d851abd"
        },
        "date": 1786506681834,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 384.1150245118294,
            "unit": "iter/sec",
            "range": "stddev: 0.006954500393581874",
            "extra": "mean: 2.6033868403635 msec\nrounds: 332"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 311.5284253793312,
            "unit": "iter/sec",
            "range": "stddev: 0.0001023548013836818",
            "extra": "mean: 3.209979952174041 msec\nrounds: 230"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1499.5943917158215,
            "unit": "iter/sec",
            "range": "stddev: 0.000015931943540197336",
            "extra": "mean: 666.8469857744732 usec\nrounds: 1406"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3095.8839263167256,
            "unit": "iter/sec",
            "range": "stddev: 0.00020705981231919",
            "extra": "mean: 323.0095261322451 usec\nrounds: 1148"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.79031984760547,
            "unit": "iter/sec",
            "range": "stddev: 0.0017128082508319135",
            "extra": "mean: 92.67565874999661 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 54947.256805279736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016175094376602308",
            "extra": "mean: 18.1992706850456 usec\nrounds: 8013"
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
          "id": "91060aad11a69c156d7bdae6df3b03700faed3c4",
          "message": "refactor(frontend): validate the snapshot edit forms with zod\n\nMoves the three snapshot edit forms off vuelidate and onto the useForm\ncore, with the rules in a pure snapshot-forms module. The per-field\nwritable computeds go with them: useForm owns one reactive state the\ntemplates bind into, so useRefPropVModel and useFormStateWatcher are\ndeleted rather than carried across.\n\nThe gate is unchanged. EditBalancesSnapshotForm still validates only the\ncategory and the location, and the price sub-form still exposes no\nvalidate(), so its messages stay decorative.\n\nTwo behaviour notes:\n\n- stateUpdated now tracks form.dirty. A plain dirty check covers the\n  whole entry, and the price fetch rewrites the value on mount, which\n  armed the dialog's unsaved-changes prompt before the user touched\n  anything. transientKeys narrows it back to the fields each form gates.\n- Messages appear on blur rather than on the first keystroke, matching\n  $autoDirty's replacement across the migrated forms.",
          "timestamp": "2026-08-12T22:29:07Z",
          "url": "https://github.com/rotki/rotki/commit/91060aad11a69c156d7bdae6df3b03700faed3c4"
        },
        "date": 1786593237549,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 505.5834456918718,
            "unit": "iter/sec",
            "range": "stddev: 0.005016278005718165",
            "extra": "mean: 1.977912861904602 msec\nrounds: 420"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 394.7999160412224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000860244662466099",
            "extra": "mean: 2.5329286034994665 msec\nrounds: 343"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1674.4316663444145,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375979702650406",
            "extra": "mean: 597.217563487186 usec\nrounds: 1835"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 574.8003075373256,
            "unit": "iter/sec",
            "range": "stddev: 0.011654040344136798",
            "extra": "mean: 1.7397346293783313 msec\nrounds: 885"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.156089826968731,
            "unit": "iter/sec",
            "range": "stddev: 0.0700821046235451",
            "extra": "mean: 162.44077460000312 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 71223.48160602519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010429889738111183",
            "extra": "mean: 14.040313355243285 usec\nrounds: 9427"
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
          "id": "f903db4176fff35b7611408f992e5482f268e752",
          "message": "refactor(frontend): take the device server errors from the core\n\n`useModelForm` grew a `serverErrors` option, so the hand-rolled mirror goes. The core's watch is\ndeep, which the local one was not, so errors mutated in place rather than reassigned now render.\n\nBoth model forms also gain the round trip they had no coverage for: an edit reaching the model the\ndialog above holds, and a change made outside the form reaching the field. Each spec mounts a\nparent holding a real ref, since the shared `mountModelForm` fits neither form: it is typed for an\nobject payload, while the device name is a bare string bridged through a writable computed, and it\nbinds a `stateUpdated` prop the range selector does not declare.",
          "timestamp": "2026-08-13T20:19:05Z",
          "url": "https://github.com/rotki/rotki/commit/f903db4176fff35b7611408f992e5482f268e752"
        },
        "date": 1786679508403,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 389.86356372860917,
            "unit": "iter/sec",
            "range": "stddev: 0.005822869302974397",
            "extra": "mean: 2.564999894927646 msec\nrounds: 276"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 316.9006684465687,
            "unit": "iter/sec",
            "range": "stddev: 0.00005078429445831125",
            "extra": "mean: 3.155562924186781 msec\nrounds: 277"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1419.6271706561988,
            "unit": "iter/sec",
            "range": "stddev: 0.00007221625154961008",
            "extra": "mean: 704.4102991757806 usec\nrounds: 1337"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2645.229069401031,
            "unit": "iter/sec",
            "range": "stddev: 0.0002484195583749263",
            "extra": "mean: 378.0390936904506 usec\nrounds: 1046"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.771922772810901,
            "unit": "iter/sec",
            "range": "stddev: 0.001502497251852325",
            "extra": "mean: 102.3340056250106 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 47332.41498811494,
            "unit": "iter/sec",
            "range": "stddev: 0.000002850691982145087",
            "extra": "mean: 21.12717046554877 usec\nrounds: 8336"
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
          "id": "610b6411579f026de0cec1da155a18e461f527ff",
          "message": "fix(dev): honour the instance data directory in electron\n\n`pnpm dev --instance` hands the electron child five instance variables\n(scripts/dev/services.ts). Four of them, the ports, are read in\napplication.ts. ROTKI_INSTANCE_DATA_DIR was read nowhere: it appeared\nexactly once in the tree, on the line that writes it.\n\nSo an instance isolated its ports and then opened the shared data\ndirectory anyway. It took that directory's lock, which meant an instance\ncould not run beside another rotki at all — it exited with code 3,\n\"data directory is already in use\" — and the ~5 GB the instance had just\nseeded went unused.\n\nloadConfig now applies the variable after the config file, so the\ninstance wins: an instance exists precisely so as not to touch the\nshared data. That meant dropping the early return for a missing config\nfile, which is the common case and would have skipped the override.\n\nAn empty value is ignored rather than treated as a directory, so an\nunset instance cannot blank out a configured data-dir.",
          "timestamp": "2026-08-14T14:47:17Z",
          "url": "https://github.com/rotki/rotki/commit/610b6411579f026de0cec1da155a18e461f527ff"
        },
        "date": 1786761965928,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 366.728016401086,
            "unit": "iter/sec",
            "range": "stddev: 0.007511974478935823",
            "extra": "mean: 2.7268164832716573 msec\nrounds: 269"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 308.93200842367025,
            "unit": "iter/sec",
            "range": "stddev: 0.000043290050937113475",
            "extra": "mean: 3.236958206766963 msec\nrounds: 266"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1366.4991370431303,
            "unit": "iter/sec",
            "range": "stddev: 0.000018026007783118774",
            "extra": "mean: 731.7970226924757 usec\nrounds: 1322"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2541.9443834572,
            "unit": "iter/sec",
            "range": "stddev: 0.00025570189289139157",
            "extra": "mean: 393.39963789449195 usec\nrounds: 950"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.429096127799692,
            "unit": "iter/sec",
            "range": "stddev: 0.0012039684197978856",
            "extra": "mean: 106.05470412500217 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 47074.480872655295,
            "unit": "iter/sec",
            "range": "stddev: 0.00000246374620208595",
            "extra": "mean: 21.24293208256879 usec\nrounds: 6876"
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
          "id": "610b6411579f026de0cec1da155a18e461f527ff",
          "message": "fix(dev): honour the instance data directory in electron\n\n`pnpm dev --instance` hands the electron child five instance variables\n(scripts/dev/services.ts). Four of them, the ports, are read in\napplication.ts. ROTKI_INSTANCE_DATA_DIR was read nowhere: it appeared\nexactly once in the tree, on the line that writes it.\n\nSo an instance isolated its ports and then opened the shared data\ndirectory anyway. It took that directory's lock, which meant an instance\ncould not run beside another rotki at all — it exited with code 3,\n\"data directory is already in use\" — and the ~5 GB the instance had just\nseeded went unused.\n\nloadConfig now applies the variable after the config file, so the\ninstance wins: an instance exists precisely so as not to touch the\nshared data. That meant dropping the early return for a missing config\nfile, which is the common case and would have skipped the override.\n\nAn empty value is ignored rather than treated as a directory, so an\nunset instance cannot blank out a configured data-dir.",
          "timestamp": "2026-08-14T14:47:17Z",
          "url": "https://github.com/rotki/rotki/commit/610b6411579f026de0cec1da155a18e461f527ff"
        },
        "date": 1786848946505,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 554.5806823157296,
            "unit": "iter/sec",
            "range": "stddev: 0.0036988746345059135",
            "extra": "mean: 1.8031641416436635 msec\nrounds: 353"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 423.0232348138827,
            "unit": "iter/sec",
            "range": "stddev: 0.00004381432982107508",
            "extra": "mean: 2.3639363460495724 msec\nrounds: 367"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 2013.29053697405,
            "unit": "iter/sec",
            "range": "stddev: 0.000016942944830280008",
            "extra": "mean: 496.6992997955413 usec\nrounds: 1958"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1155.5915488795965,
            "unit": "iter/sec",
            "range": "stddev: 0.006365624308243169",
            "extra": "mean: 865.3576611645782 usec\nrounds: 1030"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.4146734121268105,
            "unit": "iter/sec",
            "range": "stddev: 0.08679430983932054",
            "extra": "mean: 184.68334539999773 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 69113.50985544646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017526941091941498",
            "extra": "mean: 14.468951180334178 usec\nrounds: 10590"
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
          "id": "7561ca1c417ba57c6bd95bdd608ca676d5d77d8d",
          "message": "refactor(frontend): finish the vuelidate migration\n\nThe matching settings menu was the last root. Its two bounds move into\nasset-movement-matching-settings.ts with a spec, and each field now answers for itself: the rule it\nreplaces asked the whole validator whether anything was wrong, so an out-of-range tolerance\nsilently stopped the unrelated time range from saving.\n\nWith that gone the rest follows. useValidation held only callIfValid, which the menu was the last\ncaller of, and toMessages leaves validation.ts, which keeps the character helper it also holds.\n\nUnderlyingTokenManager's spec no longer builds a vuelidate parent to prove the staging row stays\nout of it. There is no ambient collector to be caught by any more: a zod form is local, and that\ncomponent exposes nothing, which is what the test says now.\n\n@vuelidate/core and @vuelidate/validators leave package.json and the catalog.",
          "timestamp": "2026-08-14T15:45:39Z",
          "url": "https://github.com/rotki/rotki/commit/7561ca1c417ba57c6bd95bdd608ca676d5d77d8d"
        },
        "date": 1786935313582,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 363.41447052388173,
            "unit": "iter/sec",
            "range": "stddev: 0.008556824994659352",
            "extra": "mean: 2.751679091254802 msec\nrounds: 263"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 313.56128409485297,
            "unit": "iter/sec",
            "range": "stddev: 0.0001376510634684155",
            "extra": "mean: 3.1891692333339785 msec\nrounds: 270"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1376.110618130803,
            "unit": "iter/sec",
            "range": "stddev: 0.000049619446768770044",
            "extra": "mean: 726.6857669903884 usec\nrounds: 1339"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2631.097830086474,
            "unit": "iter/sec",
            "range": "stddev: 0.0002510558567339945",
            "extra": "mean: 380.06948603926827 usec\nrounds: 967"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.058042031156914,
            "unit": "iter/sec",
            "range": "stddev: 0.008569324199136212",
            "extra": "mean: 99.4229291250015 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 53890.64251263799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017715273964190638",
            "extra": "mean: 18.55609718821757 usec\nrounds: 7789"
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
          "id": "79bf87f41a855da7decc255a2db5acbd07788987",
          "message": "fix(frontend): keep the row context's parts internal\n\nknip fails the build on an unused export, and the four interfaces the row\ncontext is composed from are only ever referenced by HistoryEventsRowContext\nin the same file.",
          "timestamp": "2026-08-17T11:30:09Z",
          "url": "https://github.com/rotki/rotki/commit/79bf87f41a855da7decc255a2db5acbd07788987"
        },
        "date": 1787021359610,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 366.6048531670321,
            "unit": "iter/sec",
            "range": "stddev: 0.0071801919111085626",
            "extra": "mean: 2.7277325746268315 msec\nrounds: 268"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 304.7204171254465,
            "unit": "iter/sec",
            "range": "stddev: 0.00009582848328033667",
            "extra": "mean: 3.281696741667043 msec\nrounds: 240"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1366.8064744769138,
            "unit": "iter/sec",
            "range": "stddev: 0.000014960713273525602",
            "extra": "mean: 731.6324722435244 usec\nrounds: 1315"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2454.7541065334917,
            "unit": "iter/sec",
            "range": "stddev: 0.00029825575869960573",
            "extra": "mean: 407.3727781281365 usec\nrounds: 951"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.905163672003964,
            "unit": "iter/sec",
            "range": "stddev: 0.002134149355846921",
            "extra": "mean: 112.29439871428733 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46185.97770357885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026963544316753158",
            "extra": "mean: 21.651593183065 usec\nrounds: 8655"
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
          "id": "7dd1115df55f9ce2b0663d03fbd5988fb78b54d9",
          "message": "Improvements on matching with socket decoded txs (#12949)",
          "timestamp": "2026-08-18T15:46:59Z",
          "url": "https://github.com/rotki/rotki/commit/7dd1115df55f9ce2b0663d03fbd5988fb78b54d9"
        },
        "date": 1787107957655,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 390.65684278563145,
            "unit": "iter/sec",
            "range": "stddev: 0.005240179180524423",
            "extra": "mean: 2.559791332130175 msec\nrounds: 277"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 304.2829449651241,
            "unit": "iter/sec",
            "range": "stddev: 0.00008509553976298815",
            "extra": "mean: 3.286414886363797 msec\nrounds: 264"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1393.035489457409,
            "unit": "iter/sec",
            "range": "stddev: 0.000018490191750492682",
            "extra": "mean: 717.8568008985203 usec\nrounds: 1336"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2698.5689163126976,
            "unit": "iter/sec",
            "range": "stddev: 0.00023241097744841459",
            "extra": "mean: 370.5667822507909 usec\nrounds: 1093"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.980640065908196,
            "unit": "iter/sec",
            "range": "stddev: 0.0010535515167648351",
            "extra": "mean: 100.1939748749976 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45794.84053346013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026392439772688273",
            "extra": "mean: 21.836521065497482 usec\nrounds: 8972"
          }
        ]
      }
    ]
  }
}