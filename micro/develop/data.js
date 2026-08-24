window.BENCHMARK_DATA = {
  "lastUpdate": 1787540223650,
  "repoUrl": "https://github.com/rotki/rotki",
  "entries": {
    "rotki backend micro benchmarks (develop)": [
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
          "id": "78d8a4ccf8f4795fd5ae0a6e7ea5ef3bc9bd94ca",
          "message": "Merge pull request #12436 from LefterisJP/mcp_gating\n\nGate MCP access behind Basic premium tier and up",
          "timestamp": "2026-06-16T11:23:18Z",
          "url": "https://github.com/rotki/rotki/commit/78d8a4ccf8f4795fd5ae0a6e7ea5ef3bc9bd94ca"
        },
        "date": 1781678911400,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 259.69942569240607,
            "unit": "iter/sec",
            "range": "stddev: 0.007635929902947351",
            "extra": "mean: 3.850605357843274 msec\nrounds: 204"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 186.64193766985315,
            "unit": "iter/sec",
            "range": "stddev: 0.000060572136980119436",
            "extra": "mean: 5.357852648148554 msec\nrounds: 162"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1368.9087357598203,
            "unit": "iter/sec",
            "range": "stddev: 0.000016309758624376774",
            "extra": "mean: 730.5088892174718 usec\nrounds: 1354"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 48670.40167781132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024439218349607584",
            "extra": "mean: 20.546368337368722 usec\nrounds: 8199"
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
          "id": "78d8a4ccf8f4795fd5ae0a6e7ea5ef3bc9bd94ca",
          "message": "Merge pull request #12436 from LefterisJP/mcp_gating\n\nGate MCP access behind Basic premium tier and up",
          "timestamp": "2026-06-16T11:23:18Z",
          "url": "https://github.com/rotki/rotki/commit/78d8a4ccf8f4795fd5ae0a6e7ea5ef3bc9bd94ca"
        },
        "date": 1781764321474,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 257.5428259966744,
            "unit": "iter/sec",
            "range": "stddev: 0.007320313953069169",
            "extra": "mean: 3.88284937128442 msec\nrounds: 202"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 179.58107204064308,
            "unit": "iter/sec",
            "range": "stddev: 0.0009248688337081953",
            "extra": "mean: 5.568515593746308 msec\nrounds: 96"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1393.9508835372558,
            "unit": "iter/sec",
            "range": "stddev: 0.000012898422935544443",
            "extra": "mean: 717.3853912717674 usec\nrounds: 1329"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50599.87120216049,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025045132048661432",
            "extra": "mean: 19.762896154512394 usec\nrounds: 8426"
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
          "id": "2a2458a02d0cf015adb82a4fa3c09ae67b832f23",
          "message": "Merge branch 'bugfixes' into develop",
          "timestamp": "2026-06-18T22:05:00Z",
          "url": "https://github.com/rotki/rotki/commit/2a2458a02d0cf015adb82a4fa3c09ae67b832f23"
        },
        "date": 1781851987911,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 294.06332940700753,
            "unit": "iter/sec",
            "range": "stddev: 0.0006104033214577717",
            "extra": "mean: 3.400628028039222 msec\nrounds: 214"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 168.87336271163542,
            "unit": "iter/sec",
            "range": "stddev: 0.00804831482597474",
            "extra": "mean: 5.921597011765431 msec\nrounds: 170"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1401.2993561760927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000109155035469282",
            "extra": "mean: 713.6233921699854 usec\nrounds: 1354"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2414.620973121698,
            "unit": "iter/sec",
            "range": "stddev: 0.0002753132399975516",
            "extra": "mean: 414.143673533643 usec\nrounds: 971"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.717631000213773,
            "unit": "iter/sec",
            "range": "stddev: 0.002190416576549605",
            "extra": "mean: 114.71006285715443 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45293.19934559405,
            "unit": "iter/sec",
            "range": "stddev: 0.000002597404353921609",
            "extra": "mean: 22.078369698944137 usec\nrounds: 5564"
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
          "id": "8171f42fa73b379293ba3c9ad242fad364317ede",
          "message": "chore(deps): bump http-proxy-middleware to 4.1.0\n\nMajor bump from 3.0.6 (only dev-proxy consumes it directly). dev-proxy\nalready uses the v3-style on:{} event API and is ESM with Node 22+, so\nnone of the v4 breaking changes (ESM-only, dropped Node<=20, removed\nlegacyCreateProxyMiddleware) apply.\n\nv4 also dropped its transitive http-proxy dependency (replaced internally\nby httpxy), which the electron dev proxy was relying on via a phantom\n'import httpProxy from http-proxy'. Switch app-server to httpxy as an\nexplicit dev dependency: it is loaded via dynamic import on the dev-only\nproxy path and marked external in the main vite config, so it stays out\nof the production main bundle entirely - an improvement over http-proxy,\nwhich was previously inlined into it.",
          "timestamp": "2026-06-19T09:47:22Z",
          "url": "https://github.com/rotki/rotki/commit/8171f42fa73b379293ba3c9ad242fad364317ede"
        },
        "date": 1781935618007,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 335.4839619890008,
            "unit": "iter/sec",
            "range": "stddev: 0.0064585620090166105",
            "extra": "mean: 2.9807684220469115 msec\nrounds: 263"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 244.7094006493342,
            "unit": "iter/sec",
            "range": "stddev: 0.000034105346960786754",
            "extra": "mean: 4.0864797075490715 msec\nrounds: 212"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1894.9351753733672,
            "unit": "iter/sec",
            "range": "stddev: 0.000013719412604963646",
            "extra": "mean: 527.7225379506535 usec\nrounds: 1805"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1714.8702610911184,
            "unit": "iter/sec",
            "range": "stddev: 0.003244673180775144",
            "extra": "mean: 583.1344928471331 usec\nrounds: 1049"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.67287293071617,
            "unit": "iter/sec",
            "range": "stddev: 0.016809291722342946",
            "extra": "mean: 103.38190185715186 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 70510.76875862402,
            "unit": "iter/sec",
            "range": "stddev: 0.000001169661626695846",
            "extra": "mean: 14.182230850769049 usec\nrounds: 5614"
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
          "id": "8171f42fa73b379293ba3c9ad242fad364317ede",
          "message": "chore(deps): bump http-proxy-middleware to 4.1.0\n\nMajor bump from 3.0.6 (only dev-proxy consumes it directly). dev-proxy\nalready uses the v3-style on:{} event API and is ESM with Node 22+, so\nnone of the v4 breaking changes (ESM-only, dropped Node<=20, removed\nlegacyCreateProxyMiddleware) apply.\n\nv4 also dropped its transitive http-proxy dependency (replaced internally\nby httpxy), which the electron dev proxy was relying on via a phantom\n'import httpProxy from http-proxy'. Switch app-server to httpxy as an\nexplicit dev dependency: it is loaded via dynamic import on the dev-only\nproxy path and marked external in the main vite config, so it stays out\nof the production main bundle entirely - an improvement over http-proxy,\nwhich was previously inlined into it.",
          "timestamp": "2026-06-19T09:47:22Z",
          "url": "https://github.com/rotki/rotki/commit/8171f42fa73b379293ba3c9ad242fad364317ede"
        },
        "date": 1782023945327,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 261.08065428827246,
            "unit": "iter/sec",
            "range": "stddev: 0.007528843744452919",
            "extra": "mean: 3.8302340046070555 msec\nrounds: 217"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 185.96787007873894,
            "unit": "iter/sec",
            "range": "stddev: 0.00005779705867030652",
            "extra": "mean: 5.377272964284633 msec\nrounds: 168"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1381.196912598009,
            "unit": "iter/sec",
            "range": "stddev: 0.000014223076240616936",
            "extra": "mean: 724.0097272727147 usec\nrounds: 1320"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2437.246416674312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003250586705840221",
            "extra": "mean: 410.29909538836324 usec\nrounds: 954"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.658869222162847,
            "unit": "iter/sec",
            "range": "stddev: 0.001750687492179865",
            "extra": "mean: 115.48852099999911 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46668.89088291606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032481505011131217",
            "extra": "mean: 21.42755015345923 usec\nrounds: 5533"
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
          "id": "506ed033891cffcdd58f939a8ff18cf6a7414fc1",
          "message": "fix: fold globaldb v18 upgrade into unreleased v16_v17\n\nThe Moralis price source change bumped GLOBAL_DB_VERSION 17->18 and added a\nnew v17_v18 upgrade, but the v1.44 v16_v17 upgrade was still unreleased and\nthe packaged global.db is at v17. The version mismatch broke the globaldb\nreset and packaged-db consistency tests on develop.\n\nFold the moralis price-source step (J/10) into the existing v16_v17 upgrade,\nrevert GLOBAL_DB_VERSION back to 17, drop v17_v18.py and its registration,\nand merge the upgrade test assertion into test_upgrade_v16_v17.\n\nAlso document in CLAUDE.md/AGENTS.md to check whether the latest globaldb\nupgrade is released before adding a new one vs extending the unreleased one.",
          "timestamp": "2026-06-21T21:59:34Z",
          "url": "https://github.com/rotki/rotki/commit/506ed033891cffcdd58f939a8ff18cf6a7414fc1"
        },
        "date": 1782112267417,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 268.99854338196496,
            "unit": "iter/sec",
            "range": "stddev: 0.006291045100101999",
            "extra": "mean: 3.7174922489451854 msec\nrounds: 237"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 180.94462424016396,
            "unit": "iter/sec",
            "range": "stddev: 0.0004142349407740925",
            "extra": "mean: 5.526552690909022 msec\nrounds: 165"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1364.8135773817041,
            "unit": "iter/sec",
            "range": "stddev: 0.000013584243802513153",
            "extra": "mean: 732.7008000011456 usec\nrounds: 1350"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2583.6877778741596,
            "unit": "iter/sec",
            "range": "stddev: 0.00023033520465286927",
            "extra": "mean: 387.04367012286326 usec\nrounds: 1061"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.001595526055805,
            "unit": "iter/sec",
            "range": "stddev: 0.0019987293236337364",
            "extra": "mean: 111.0914167499999 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46085.6783609699,
            "unit": "iter/sec",
            "range": "stddev: 0.000002967886181545733",
            "extra": "mean: 21.69871499270157 usec\nrounds: 6063"
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
          "id": "46d909f0d61b345f0dedcb275230a2a8a72f28c4",
          "message": "Bit2me: apply review feedback and fix API bugs\n\nPR review feedback and bugfixes for Bit2me exchange integration",
          "timestamp": "2026-06-21T21:40:01Z",
          "url": "https://github.com/rotki/rotki/commit/46d909f0d61b345f0dedcb275230a2a8a72f28c4"
        },
        "date": 1782194107837,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 263.8874553124027,
            "unit": "iter/sec",
            "range": "stddev: 0.007930669978815265",
            "extra": "mean: 3.789494270639548 msec\nrounds: 218"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 189.10015431617185,
            "unit": "iter/sec",
            "range": "stddev: 0.00007298496064280957",
            "extra": "mean: 5.288202982256794 msec\nrounds: 169"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1383.58724781799,
            "unit": "iter/sec",
            "range": "stddev: 0.00001218784041238145",
            "extra": "mean: 722.7589019608754 usec\nrounds: 1326"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2704.4185180430177,
            "unit": "iter/sec",
            "range": "stddev: 0.00024751309171881943",
            "extra": "mean: 369.7652539088603 usec\nrounds: 1024"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.955934737865416,
            "unit": "iter/sec",
            "range": "stddev: 0.005108984470282328",
            "extra": "mean: 111.65780337501019 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 47184.731118003125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030816307241610586",
            "extra": "mean: 21.193296566618653 usec\nrounds: 5358"
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
          "id": "36f70c8ce5b09c2799638505b2d9e62098ab1137",
          "message": " Add MCP server exposing rotki data to LLM clients\n\nAdd a premium-gated Model Context Protocol server that lets local LLM\n  clients query the user's rotki data. It runs as a stdio subprocess\n  talking to the running backend over REST, so no ports are exposed.\n\n  The public surface is a generic, privacy-filtered analytics layer rather\n  than one tool per question:\n  - refresh_analytics_data loads source tables (history_events by default,\n    balances opt-in) into an in-memory Polars session\n  - list_tables / describe_table expose the schema\n  - query_sql runs read-only Polars SQL (aggregations, joins, windows) so\n    the math is computed exactly instead of by the model\n  - info reports connectivity and unlock state (ungated)\n\n  All rows pass through a fail-closed privacy filter before they can be\n  queried: identifiers are HMAC-hashed consistently within a session,\n  free-text notes are redacted, and unrecognized columns are hidden by\n  default. A --privacy-mode flag selects balanced (default), strict, or raw.\n\n  History events load complete by default (opt-in --max-events cap),\n  accept second or millisecond time ranges, and gain readable year/datetime\n  columns so models can filter by date without unix-timestamp math.",
          "timestamp": "2026-06-16T14:37:57Z",
          "url": "https://github.com/rotki/rotki/commit/36f70c8ce5b09c2799638505b2d9e62098ab1137"
        },
        "date": 1782280292775,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 268.3209335594353,
            "unit": "iter/sec",
            "range": "stddev: 0.006849696820053263",
            "extra": "mean: 3.7268802949304436 msec\nrounds: 217"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 190.5288867995693,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941505421961716",
            "extra": "mean: 5.248547959302204 msec\nrounds: 172"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1370.7987362831796,
            "unit": "iter/sec",
            "range": "stddev: 0.000017539214312479492",
            "extra": "mean: 729.5016938164291 usec\nrounds: 1326"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2604.7674566453734,
            "unit": "iter/sec",
            "range": "stddev: 0.00028034412190962635",
            "extra": "mean: 383.91143034621575 usec\nrounds: 1127"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.055270663472013,
            "unit": "iter/sec",
            "range": "stddev: 0.0025511422872800207",
            "extra": "mean: 110.43292212499978 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45741.478510031935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024673750871214965",
            "extra": "mean: 21.86199555794162 usec\nrounds: 5403"
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
          "id": "36f70c8ce5b09c2799638505b2d9e62098ab1137",
          "message": " Add MCP server exposing rotki data to LLM clients\n\nAdd a premium-gated Model Context Protocol server that lets local LLM\n  clients query the user's rotki data. It runs as a stdio subprocess\n  talking to the running backend over REST, so no ports are exposed.\n\n  The public surface is a generic, privacy-filtered analytics layer rather\n  than one tool per question:\n  - refresh_analytics_data loads source tables (history_events by default,\n    balances opt-in) into an in-memory Polars session\n  - list_tables / describe_table expose the schema\n  - query_sql runs read-only Polars SQL (aggregations, joins, windows) so\n    the math is computed exactly instead of by the model\n  - info reports connectivity and unlock state (ungated)\n\n  All rows pass through a fail-closed privacy filter before they can be\n  queried: identifiers are HMAC-hashed consistently within a session,\n  free-text notes are redacted, and unrecognized columns are hidden by\n  default. A --privacy-mode flag selects balanced (default), strict, or raw.\n\n  History events load complete by default (opt-in --max-events cap),\n  accept second or millisecond time ranges, and gain readable year/datetime\n  columns so models can filter by date without unix-timestamp math.",
          "timestamp": "2026-06-16T14:37:57Z",
          "url": "https://github.com/rotki/rotki/commit/36f70c8ce5b09c2799638505b2d9e62098ab1137"
        },
        "date": 1782288212048,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 278.73519411362025,
            "unit": "iter/sec",
            "range": "stddev: 0.006413577978689753",
            "extra": "mean: 3.5876345044263482 msec\nrounds: 226"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 192.47305266975889,
            "unit": "iter/sec",
            "range": "stddev: 0.000042188834462173185",
            "extra": "mean: 5.195532497298614 msec\nrounds: 185"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1445.0032503611817,
            "unit": "iter/sec",
            "range": "stddev: 0.000007748809729506337",
            "extra": "mean: 692.0399658270995 usec\nrounds: 1229"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3361.7997582208445,
            "unit": "iter/sec",
            "range": "stddev: 0.0001619803660186313",
            "extra": "mean: 297.4597156046043 usec\nrounds: 1083"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.006133199520574,
            "unit": "iter/sec",
            "range": "stddev: 0.000789277866479418",
            "extra": "mean: 90.85843155555848 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50866.6353660368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016806605693859962",
            "extra": "mean: 19.659251939979722 usec\nrounds: 6315"
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
        "date": 1782366945001,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 257.4953644950514,
            "unit": "iter/sec",
            "range": "stddev: 0.007446627130191687",
            "extra": "mean: 3.883565057417639 msec\nrounds: 209"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 185.93460395204374,
            "unit": "iter/sec",
            "range": "stddev: 0.00005335873618059138",
            "extra": "mean: 5.378235028579833 msec\nrounds: 175"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1384.1385548829671,
            "unit": "iter/sec",
            "range": "stddev: 0.000013209615654785673",
            "extra": "mean: 722.4710246472058 usec\nrounds: 1339"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2264.3984389491425,
            "unit": "iter/sec",
            "range": "stddev: 0.00028376020417458277",
            "extra": "mean: 441.6183931234637 usec\nrounds: 931"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.315008144258098,
            "unit": "iter/sec",
            "range": "stddev: 0.0035670008848435754",
            "extra": "mean: 120.26446428564797 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46546.39728993532,
            "unit": "iter/sec",
            "range": "stddev: 0.000002721818807771015",
            "extra": "mean: 21.483939858353526 usec\nrounds: 7366"
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
        "date": 1782453631986,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 268.9850673772138,
            "unit": "iter/sec",
            "range": "stddev: 0.006658498176344026",
            "extra": "mean: 3.717678493273533 msec\nrounds: 223"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 189.35516818594914,
            "unit": "iter/sec",
            "range": "stddev: 0.0001825211322002391",
            "extra": "mean: 5.28108110055907 msec\nrounds: 179"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1445.502827946253,
            "unit": "iter/sec",
            "range": "stddev: 0.000017824567473556207",
            "extra": "mean: 691.8007911619127 usec\nrounds: 1403"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2533.588020543054,
            "unit": "iter/sec",
            "range": "stddev: 0.0002236291784159701",
            "extra": "mean: 394.6971614531309 usec\nrounds: 991"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.88244284524713,
            "unit": "iter/sec",
            "range": "stddev: 0.0013124479551637968",
            "extra": "mean: 101.1895556249982 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 49582.02726638623,
            "unit": "iter/sec",
            "range": "stddev: 0.00000170519285792219",
            "extra": "mean: 20.16859848483732 usec\nrounds: 8316"
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
        "date": 1782538817212,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 264.97249232650887,
            "unit": "iter/sec",
            "range": "stddev: 0.007602665600156597",
            "extra": "mean: 3.7739766540285364 msec\nrounds: 211"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 187.51688863262865,
            "unit": "iter/sec",
            "range": "stddev: 0.000057561231972576164",
            "extra": "mean: 5.3328529888267155 msec\nrounds: 179"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1388.15158302883,
            "unit": "iter/sec",
            "range": "stddev: 0.00003467096404912241",
            "extra": "mean: 720.3824223706781 usec\nrounds: 1198"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2523.0582057962943,
            "unit": "iter/sec",
            "range": "stddev: 0.0002632350480283586",
            "extra": "mean: 396.34440366959086 usec\nrounds: 1199"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.080786006093746,
            "unit": "iter/sec",
            "range": "stddev: 0.002170383570196092",
            "extra": "mean: 110.12262587500032 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46919.46669483488,
            "unit": "iter/sec",
            "range": "stddev: 0.00000255767515092443",
            "extra": "mean: 21.31311522579784 usec\nrounds: 7507"
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
        "date": 1782626812372,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 257.207567204286,
            "unit": "iter/sec",
            "range": "stddev: 0.00785320552583857",
            "extra": "mean: 3.8879104952839674 msec\nrounds: 212"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 185.47772022702134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005630538582957567",
            "extra": "mean: 5.391483132184384 msec\nrounds: 174"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1372.0251761496713,
            "unit": "iter/sec",
            "range": "stddev: 0.000019999115061059363",
            "extra": "mean: 728.8495993975201 usec\nrounds: 1328"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2398.432311082456,
            "unit": "iter/sec",
            "range": "stddev: 0.00031624085020193676",
            "extra": "mean: 416.9390127790105 usec\nrounds: 939"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.645611898499443,
            "unit": "iter/sec",
            "range": "stddev: 0.0014590196238614178",
            "extra": "mean: 115.66561299999633 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45921.99939667613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029783877868268372",
            "extra": "mean: 21.77605533596128 usec\nrounds: 7590"
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
        "date": 1782714507857,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 265.3392825725311,
            "unit": "iter/sec",
            "range": "stddev: 0.007585123065427332",
            "extra": "mean: 3.7687597188955535 msec\nrounds: 217"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 189.07613174751316,
            "unit": "iter/sec",
            "range": "stddev: 0.000050594978176185075",
            "extra": "mean: 5.288874860923066 msec\nrounds: 151"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1386.4199294922926,
            "unit": "iter/sec",
            "range": "stddev: 0.000012712351014888184",
            "extra": "mean: 721.2821878333791 usec\nrounds: 1315"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2442.7237074647896,
            "unit": "iter/sec",
            "range": "stddev: 0.0003186939983965439",
            "extra": "mean: 409.37908652708904 usec\nrounds: 809"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.378160110485515,
            "unit": "iter/sec",
            "range": "stddev: 0.0058349795766969685",
            "extra": "mean: 119.35794814287094 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45425.78258092277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031906758823272408",
            "extra": "mean: 22.01393004553244 usec\nrounds: 7176"
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
        "date": 1782799088341,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 273.1763371397875,
            "unit": "iter/sec",
            "range": "stddev: 0.0075091060578891524",
            "extra": "mean: 3.660639169813191 msec\nrounds: 212"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 194.7583945603724,
            "unit": "iter/sec",
            "range": "stddev: 0.000049012021609191",
            "extra": "mean: 5.134566868130625 msec\nrounds: 182"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1440.3888883962518,
            "unit": "iter/sec",
            "range": "stddev: 0.000009697100865349924",
            "extra": "mean: 694.2569524494272 usec\nrounds: 1388"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2710.9031417448605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002140460316504652",
            "extra": "mean: 368.88075586365454 usec\nrounds: 938"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.27783825492485,
            "unit": "iter/sec",
            "range": "stddev: 0.0008239252764281982",
            "extra": "mean: 97.29672477778371 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50230.76647199587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015033960494195683",
            "extra": "mean: 19.908117479304433 usec\nrounds: 8061"
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
        "date": 1782886612311,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 276.6476630531363,
            "unit": "iter/sec",
            "range": "stddev: 0.0077480176135879195",
            "extra": "mean: 3.6147061173906536 msec\nrounds: 230"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 195.7376989371285,
            "unit": "iter/sec",
            "range": "stddev: 0.000039691233782594144",
            "extra": "mean: 5.108877878048433 msec\nrounds: 164"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1443.4111718504962,
            "unit": "iter/sec",
            "range": "stddev: 0.000010295498668545539",
            "extra": "mean: 692.8032839859276 usec\nrounds: 1405"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3417.068588593087,
            "unit": "iter/sec",
            "range": "stddev: 0.00017227238173857609",
            "extra": "mean: 292.6485009221694 usec\nrounds: 1084"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.5762276098733,
            "unit": "iter/sec",
            "range": "stddev: 0.00246785968496274",
            "extra": "mean: 94.55167162500011 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 51100.89331299125,
            "unit": "iter/sec",
            "range": "stddev: 0.000001338615958118143",
            "extra": "mean: 19.569129523334038 usec\nrounds: 6964"
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
        "date": 1782971102259,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 247.06013211379627,
            "unit": "iter/sec",
            "range": "stddev: 0.010373297548567655",
            "extra": "mean: 4.0475976089068 msec\nrounds: 202"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 181.31842787481324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006397324725866122",
            "extra": "mean: 5.515159224138127 msec\nrounds: 174"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1463.9175091992524,
            "unit": "iter/sec",
            "range": "stddev: 0.00001780283178514204",
            "extra": "mean: 683.0985992830904 usec\nrounds: 1395"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2983.605200554994,
            "unit": "iter/sec",
            "range": "stddev: 0.00024982570837408916",
            "extra": "mean: 335.1649875841433 usec\nrounds: 886"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.077726734930424,
            "unit": "iter/sec",
            "range": "stddev: 0.0024985639851562505",
            "extra": "mean: 99.22872750001233 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 54753.997620355985,
            "unit": "iter/sec",
            "range": "stddev: 0.000001916449971022795",
            "extra": "mean: 18.263506656329117 usec\nrounds: 6235"
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
        "date": 1783057300461,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 375.0256996962253,
            "unit": "iter/sec",
            "range": "stddev: 0.0075993219273147875",
            "extra": "mean: 2.66648392579498 msec\nrounds: 283"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.64499217704935,
            "unit": "iter/sec",
            "range": "stddev: 0.00013399234679436453",
            "extra": "mean: 3.2295048370367905 msec\nrounds: 270"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1422.5252993411464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004086184161816177",
            "extra": "mean: 702.9751952131592 usec\nrounds: 1337"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2350.5839555722755,
            "unit": "iter/sec",
            "range": "stddev: 0.00031447423365772373",
            "extra": "mean: 425.4261999999651 usec\nrounds: 1010"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.95926145869171,
            "unit": "iter/sec",
            "range": "stddev: 0.001247655333917489",
            "extra": "mean: 111.61634299999841 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46468.7045181251,
            "unit": "iter/sec",
            "range": "stddev: 0.000003319383286641415",
            "extra": "mean: 21.51985966404444 usec\nrounds: 7083"
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
        "date": 1783142659249,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 368.3856553934517,
            "unit": "iter/sec",
            "range": "stddev: 0.007370786141135773",
            "extra": "mean: 2.714546523077716 msec\nrounds: 260"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.69018888616154,
            "unit": "iter/sec",
            "range": "stddev: 0.000051934583908226174",
            "extra": "mean: 3.229033517647497 msec\nrounds: 255"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1403.7765947966784,
            "unit": "iter/sec",
            "range": "stddev: 0.00002625551747277249",
            "extra": "mean: 712.3640639875742 usec\nrounds: 1344"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2365.3123677339777,
            "unit": "iter/sec",
            "range": "stddev: 0.00031595257220501957",
            "extra": "mean: 422.77714082982726 usec\nrounds: 916"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.851082425993063,
            "unit": "iter/sec",
            "range": "stddev: 0.001278700276531751",
            "extra": "mean: 112.98053185713083 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45110.21533869873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028733125361313543",
            "extra": "mean: 22.167927873803112 usec\nrounds: 7168"
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
        "date": 1783230689669,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 672.2294006189352,
            "unit": "iter/sec",
            "range": "stddev: 0.006144140419333638",
            "extra": "mean: 1.4875874204241586 msec\nrounds: 421"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 596.4423570197472,
            "unit": "iter/sec",
            "range": "stddev: 0.000018081607782804305",
            "extra": "mean: 1.6766079541981482 msec\nrounds: 524"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 2833.55914405197,
            "unit": "iter/sec",
            "range": "stddev: 0.000006606364740036063",
            "extra": "mean: 352.913050041372 usec\nrounds: 2378"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 4028.6271636957704,
            "unit": "iter/sec",
            "range": "stddev: 0.00040341366506083803",
            "extra": "mean: 248.2235161922065 usec\nrounds: 1019"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 16.315191463367594,
            "unit": "iter/sec",
            "range": "stddev: 0.01264417867028242",
            "extra": "mean: 61.29256909091716 msec\nrounds: 11"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 108621.51061946536,
            "unit": "iter/sec",
            "range": "stddev: 8.034381621375544e-7",
            "extra": "mean: 9.206279624514782 usec\nrounds: 7578"
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
        "date": 1783318365130,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 360.77423380491683,
            "unit": "iter/sec",
            "range": "stddev: 0.008732512062753016",
            "extra": "mean: 2.771816571969313 msec\nrounds: 264"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.8414812101653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000670920342623552",
            "extra": "mean: 3.227456814672599 msec\nrounds: 259"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1384.829918467264,
            "unit": "iter/sec",
            "range": "stddev: 0.00001623488287964671",
            "extra": "mean: 722.1103376411772 usec\nrounds: 1238"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2138.8386490251696,
            "unit": "iter/sec",
            "range": "stddev: 0.00030459963235603447",
            "extra": "mean: 467.5434495518283 usec\nrounds: 892"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.406042014181132,
            "unit": "iter/sec",
            "range": "stddev: 0.0014726900505672492",
            "extra": "mean: 118.96205114285456 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 43042.11076516603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030605224736340324",
            "extra": "mean: 23.233061349056793 usec\nrounds: 6895"
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
        "date": 1783403562361,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 598.1584893022629,
            "unit": "iter/sec",
            "range": "stddev: 0.008027015633158482",
            "extra": "mean: 1.6717977223168317 msec\nrounds: 587"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 582.7702849549262,
            "unit": "iter/sec",
            "range": "stddev: 0.0001044077683249778",
            "extra": "mean: 1.7159419857471696 msec\nrounds: 421"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 2784.442492300878,
            "unit": "iter/sec",
            "range": "stddev: 0.000028152087787053066",
            "extra": "mean: 359.1383204232265 usec\nrounds: 2737"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1678.3744045680403,
            "unit": "iter/sec",
            "range": "stddev: 0.005196912070970772",
            "extra": "mean: 595.8146151885388 usec\nrounds: 1185"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 16.54929647516317,
            "unit": "iter/sec",
            "range": "stddev: 0.009259309872234915",
            "extra": "mean: 60.42552935714087 msec\nrounds: 14"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 104729.62760615797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010768111591009002",
            "extra": "mean: 9.548396407562528 usec\nrounds: 9576"
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
        "date": 1783486701753,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 386.29951235562055,
            "unit": "iter/sec",
            "range": "stddev: 0.0072800037400906166",
            "extra": "mean: 2.5886649297124085 msec\nrounds: 313"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 332.92721462004175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326013013161544",
            "extra": "mean: 3.0036595270268465 msec\nrounds: 296"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1442.9021585386763,
            "unit": "iter/sec",
            "range": "stddev: 0.000013426672984788853",
            "extra": "mean: 693.047684544853 usec\nrounds: 1417"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3459.8305415141404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001642500806940122",
            "extra": "mean: 289.0314967745113 usec\nrounds: 1085"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.173171818066654,
            "unit": "iter/sec",
            "range": "stddev: 0.001139031928677258",
            "extra": "mean: 89.5001004444443 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50195.64869589158,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014722440737535018",
            "extra": "mean: 19.922045555352057 usec\nrounds: 9022"
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
        "date": 1783662576089,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 394.0477526488634,
            "unit": "iter/sec",
            "range": "stddev: 0.00571932286248944",
            "extra": "mean: 2.537763490028331 msec\nrounds: 351"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 259.7021733390708,
            "unit": "iter/sec",
            "range": "stddev: 0.006581568842787328",
            "extra": "mean: 3.8505646184731233 msec\nrounds: 249"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1386.318806421105,
            "unit": "iter/sec",
            "range": "stddev: 0.000012998965194777394",
            "extra": "mean: 721.3348007458555 usec\nrounds: 1340"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2398.391045458247,
            "unit": "iter/sec",
            "range": "stddev: 0.00028800543134161713",
            "extra": "mean: 416.94618644180923 usec\nrounds: 944"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.778434865384293,
            "unit": "iter/sec",
            "range": "stddev: 0.001139381519953527",
            "extra": "mean: 128.56056742857294 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45506.31549226255,
            "unit": "iter/sec",
            "range": "stddev: 0.000002621700701810088",
            "extra": "mean: 21.974971807375404 usec\nrounds: 8300"
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
        "date": 1783745633282,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 374.1436982948598,
            "unit": "iter/sec",
            "range": "stddev: 0.007872971866426954",
            "extra": "mean: 2.6727698597021607 msec\nrounds: 335"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 302.68090962710363,
            "unit": "iter/sec",
            "range": "stddev: 0.00004783765780210746",
            "extra": "mean: 3.3038092862611608 msec\nrounds: 262"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1390.6454382114157,
            "unit": "iter/sec",
            "range": "stddev: 0.000011990330484649926",
            "extra": "mean: 719.0905550203754 usec\nrounds: 1245"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2411.3809490971316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002879007359512029",
            "extra": "mean: 414.70013287382886 usec\nrounds: 1016"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.771401751358754,
            "unit": "iter/sec",
            "range": "stddev: 0.0025654876166256117",
            "extra": "mean: 128.67691466666997 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45062.2167699903,
            "unit": "iter/sec",
            "range": "stddev: 0.000002958556311141446",
            "extra": "mean: 22.19154031201504 usec\nrounds: 7566"
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
        "date": 1783832745721,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 393.45307787240887,
            "unit": "iter/sec",
            "range": "stddev: 0.004564671834458179",
            "extra": "mean: 2.541599128941839 msec\nrounds: 349"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 284.8941500713567,
            "unit": "iter/sec",
            "range": "stddev: 0.004997828091682178",
            "extra": "mean: 3.5100755833334327 msec\nrounds: 276"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1378.0568344993883,
            "unit": "iter/sec",
            "range": "stddev: 0.00001551455480051466",
            "extra": "mean: 725.6594756944648 usec\nrounds: 1337"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2462.6650243244308,
            "unit": "iter/sec",
            "range": "stddev: 0.00026726317017888396",
            "extra": "mean: 406.0641581874597 usec\nrounds: 1081"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.74575293644265,
            "unit": "iter/sec",
            "range": "stddev: 0.0008708478725717606",
            "extra": "mean: 129.10300757143236 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46116.44814427807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026812765261478473",
            "extra": "mean: 21.68423719171607 usec\nrounds: 8959"
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
        "date": 1783919529931,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 405.78516316513236,
            "unit": "iter/sec",
            "range": "stddev: 0.004822012723060381",
            "extra": "mean: 2.4643582140854536 msec\nrounds: 355"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 318.8203053573273,
            "unit": "iter/sec",
            "range": "stddev: 0.000049353196639719075",
            "extra": "mean: 3.136563083330657 msec\nrounds: 12"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1378.370489430481,
            "unit": "iter/sec",
            "range": "stddev: 0.000025263547507413164",
            "extra": "mean: 725.4943483396709 usec\nrounds: 1355"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1928.4449486822093,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209992417321145",
            "extra": "mean: 518.5525263157466 usec\nrounds: 1026"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.370901516171466,
            "unit": "iter/sec",
            "range": "stddev: 0.0033241565578358088",
            "extra": "mean: 135.66861499994806 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45788.7175600576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024769696734893235",
            "extra": "mean: 21.839441095688596 usec\nrounds: 8955"
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
        "date": 1784003953784,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 382.65523697022456,
            "unit": "iter/sec",
            "range": "stddev: 0.005717982420694665",
            "extra": "mean: 2.6133184741381514 msec\nrounds: 348"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 289.9247495573673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000388802261451934",
            "extra": "mean: 3.449170867705209 msec\nrounds: 257"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1387.1663419257663,
            "unit": "iter/sec",
            "range": "stddev: 0.000013078901491455576",
            "extra": "mean: 720.894077210471 usec\nrounds: 1334"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2658.9819079345393,
            "unit": "iter/sec",
            "range": "stddev: 0.00024096166362137342",
            "extra": "mean: 376.08379245302433 usec\nrounds: 1007"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.549391394963136,
            "unit": "iter/sec",
            "range": "stddev: 0.0011530351522705629",
            "extra": "mean: 116.96739028571658 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 44337.6451275579,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028085637888553606",
            "extra": "mean: 22.554197389668165 usec\nrounds: 8582"
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
        "date": 1784090362404,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 380.73706194514324,
            "unit": "iter/sec",
            "range": "stddev: 0.007652572740591693",
            "extra": "mean: 2.626484521604257 msec\nrounds: 324"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 311.4309547054859,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564677298827747",
            "extra": "mean: 3.210984601532883 msec\nrounds: 261"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1484.315311142373,
            "unit": "iter/sec",
            "range": "stddev: 0.000015019436045520578",
            "extra": "mean: 673.7113014285155 usec\nrounds: 1400"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3055.1146552550017,
            "unit": "iter/sec",
            "range": "stddev: 0.0002354318029208987",
            "extra": "mean: 327.3199577894509 usec\nrounds: 995"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.889210825005078,
            "unit": "iter/sec",
            "range": "stddev: 0.002060931056802922",
            "extra": "mean: 101.12030350000012 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 53894.05275348355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018230786725091444",
            "extra": "mean: 18.55492301857672 usec\nrounds: 6599"
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
        "date": 1784177472497,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 385.20966770177563,
            "unit": "iter/sec",
            "range": "stddev: 0.006037035774507636",
            "extra": "mean: 2.5959888441174512 msec\nrounds: 340"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 306.4963091256972,
            "unit": "iter/sec",
            "range": "stddev: 0.00011452656903905696",
            "extra": "mean: 3.2626820298507737 msec\nrounds: 268"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1391.1423751055943,
            "unit": "iter/sec",
            "range": "stddev: 0.000012760706758469152",
            "extra": "mean: 718.8336851029322 usec\nrounds: 1356"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2335.4147574246463,
            "unit": "iter/sec",
            "range": "stddev: 0.00038878644751726436",
            "extra": "mean: 428.189466911967 usec\nrounds: 816"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.464263038049987,
            "unit": "iter/sec",
            "range": "stddev: 0.003923318954923011",
            "extra": "mean: 118.14377642857161 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 43579.22772500554,
            "unit": "iter/sec",
            "range": "stddev: 0.000002741397323474228",
            "extra": "mean: 22.94671228022256 usec\nrounds: 7622"
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
        "date": 1784264038213,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 447.3530798110778,
            "unit": "iter/sec",
            "range": "stddev: 0.0028690619705767717",
            "extra": "mean: 2.2353707733996404 msec\nrounds: 406"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 330.31068604530276,
            "unit": "iter/sec",
            "range": "stddev: 0.000024234017495878853",
            "extra": "mean: 3.027452765675428 msec\nrounds: 303"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1196.8081374016099,
            "unit": "iter/sec",
            "range": "stddev: 0.00002276530960735833",
            "extra": "mean: 835.5558161319825 usec\nrounds: 1153"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3301.485963459245,
            "unit": "iter/sec",
            "range": "stddev: 0.00016529479472229215",
            "extra": "mean: 302.89391233764803 usec\nrounds: 1232"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.394602295899096,
            "unit": "iter/sec",
            "range": "stddev: 0.0020908817984759604",
            "extra": "mean: 135.23377728570753 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 44467.3524124057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015715164567030154",
            "extra": "mean: 22.488408815655404 usec\nrounds: 7600"
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
        "date": 1784349458351,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 393.81249614597573,
            "unit": "iter/sec",
            "range": "stddev: 0.003654453667865106",
            "extra": "mean: 2.5392795042982255 msec\nrounds: 349"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 308.74249814428583,
            "unit": "iter/sec",
            "range": "stddev: 0.000038466235035377615",
            "extra": "mean: 3.2389450950567427 msec\nrounds: 263"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1102.1427840671302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000234763206618792",
            "extra": "mean: 907.3234561404081 usec\nrounds: 1083"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2350.4580454544007,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782035103284006",
            "extra": "mean: 425.4489893720591 usec\nrounds: 1035"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.1536348348703,
            "unit": "iter/sec",
            "range": "stddev: 0.0033680277468473695",
            "extra": "mean: 162.50558033333107 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 36359.01913259055,
            "unit": "iter/sec",
            "range": "stddev: 0.000004248679011530551",
            "extra": "mean: 27.50349222439959 usec\nrounds: 7009"
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
        "date": 1784437170982,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 404.90069598179986,
            "unit": "iter/sec",
            "range": "stddev: 0.003193774068683555",
            "extra": "mean: 2.4697413709680305 msec\nrounds: 372"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 313.80145496864685,
            "unit": "iter/sec",
            "range": "stddev: 0.00044536698857868234",
            "extra": "mean: 3.186728372881235 msec\nrounds: 295"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1156.5085895648338,
            "unit": "iter/sec",
            "range": "stddev: 0.000014556874674283253",
            "extra": "mean: 864.6714853854011 usec\nrounds: 1129"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2530.028108150918,
            "unit": "iter/sec",
            "range": "stddev: 0.00025761225625457187",
            "extra": "mean: 395.25252576377676 usec\nrounds: 1048"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.4176649187573105,
            "unit": "iter/sec",
            "range": "stddev: 0.001201312886880979",
            "extra": "mean: 155.81991466666287 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37639.96542959953,
            "unit": "iter/sec",
            "range": "stddev: 0.000003973657845988163",
            "extra": "mean: 26.567505803648118 usec\nrounds: 7323"
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
        "date": 1784524733571,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 394.96788247948643,
            "unit": "iter/sec",
            "range": "stddev: 0.003619667603575743",
            "extra": "mean: 2.5318514349124004 msec\nrounds: 361"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.72113242383847,
            "unit": "iter/sec",
            "range": "stddev: 0.000039636595641494737",
            "extra": "mean: 3.2287109122135975 msec\nrounds: 262"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1114.9909492518639,
            "unit": "iter/sec",
            "range": "stddev: 0.000023314570668959012",
            "extra": "mean: 896.8682666625945 usec\nrounds: 1110"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2282.5877302178583,
            "unit": "iter/sec",
            "range": "stddev: 0.00033642125648370965",
            "extra": "mean: 438.0992619742841 usec\nrounds: 939"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.9224010040959705,
            "unit": "iter/sec",
            "range": "stddev: 0.0036171427848843683",
            "extra": "mean: 168.85043740003312 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 35815.72175602168,
            "unit": "iter/sec",
            "range": "stddev: 0.000004270973457853698",
            "extra": "mean: 27.92069937364505 usec\nrounds: 6686"
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
        "date": 1784610014000,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 399.09357781027416,
            "unit": "iter/sec",
            "range": "stddev: 0.0036387890487739514",
            "extra": "mean: 2.5056780053609176 msec\nrounds: 373"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 314.18382754316,
            "unit": "iter/sec",
            "range": "stddev: 0.000034532127840391594",
            "extra": "mean: 3.1828500143363625 msec\nrounds: 279"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1105.123956396021,
            "unit": "iter/sec",
            "range": "stddev: 0.00007432114625782885",
            "extra": "mean: 904.8758686411556 usec\nrounds: 1081"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2529.8119030282646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002778725539920787",
            "extra": "mean: 395.28630520038604 usec\nrounds: 1019"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.197754421560402,
            "unit": "iter/sec",
            "range": "stddev: 0.00682081944509168",
            "extra": "mean: 161.34876150001296 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37495.31387521033,
            "unit": "iter/sec",
            "range": "stddev: 0.000003666213393124115",
            "extra": "mean: 26.669999438546917 usec\nrounds: 7120"
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
        "date": 1784696324433,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 344.41922916836154,
            "unit": "iter/sec",
            "range": "stddev: 0.0028600572008857014",
            "extra": "mean: 2.903438354515255 msec\nrounds: 299"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 261.7436565017258,
            "unit": "iter/sec",
            "range": "stddev: 0.00004459190274244625",
            "extra": "mean: 3.8205319409275025 msec\nrounds: 237"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 782.8292921988777,
            "unit": "iter/sec",
            "range": "stddev: 0.00013299394477900943",
            "extra": "mean: 1.2774177077496867 msec\nrounds: 787"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2288.8154484213096,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907937451642039",
            "extra": "mean: 436.9072223318578 usec\nrounds: 1012"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.617062653743591,
            "unit": "iter/sec",
            "range": "stddev: 0.004026792296337639",
            "extra": "mean: 178.02899160000152 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30700.02094575058,
            "unit": "iter/sec",
            "range": "stddev: 0.000004662804945356342",
            "extra": "mean: 32.57326767845145 usec\nrounds: 6788"
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
        "date": 1784783066751,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 343.48620905286475,
            "unit": "iter/sec",
            "range": "stddev: 0.003178604645985609",
            "extra": "mean: 2.9113250361853495 msec\nrounds: 304"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 259.3974363008775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000581910936367023",
            "extra": "mean: 3.8550882162154094 msec\nrounds: 222"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 830.4363555955439,
            "unit": "iter/sec",
            "range": "stddev: 0.000014102758992033118",
            "extra": "mean: 1.2041862007388324 msec\nrounds: 812"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2351.901333034439,
            "unit": "iter/sec",
            "range": "stddev: 0.0003174648677557684",
            "extra": "mean: 425.1879047620562 usec\nrounds: 945"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.670207349776177,
            "unit": "iter/sec",
            "range": "stddev: 0.0020734160360720167",
            "extra": "mean: 176.3603935999754 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30414.280195820767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030994716139134268",
            "extra": "mean: 32.879292015512185 usec\nrounds: 5736"
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
        "date": 1784869213875,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 336.94572172168455,
            "unit": "iter/sec",
            "range": "stddev: 0.0037763844260259097",
            "extra": "mean: 2.9678370596021244 msec\nrounds: 302"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 269.6597075139958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000828776910647964",
            "extra": "mean: 3.708377529661521 msec\nrounds: 236"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 888.2479497497884,
            "unit": "iter/sec",
            "range": "stddev: 0.000015776844908447842",
            "extra": "mean: 1.1258117739328204 msec\nrounds: 867"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2906.3566613492576,
            "unit": "iter/sec",
            "range": "stddev: 0.00022356470482716786",
            "extra": "mean: 344.0733937780907 usec\nrounds: 1125"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.126484695109062,
            "unit": "iter/sec",
            "range": "stddev: 0.009817970432437982",
            "extra": "mean: 163.22574033333126 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37721.957349777615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018786721001973978",
            "extra": "mean: 26.509759043717686 usec\nrounds: 6275"
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
        "date": 1784955378187,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 334.86074083189993,
            "unit": "iter/sec",
            "range": "stddev: 0.0037194183601718016",
            "extra": "mean: 2.986316035482941 msec\nrounds: 310"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 272.5391990726678,
            "unit": "iter/sec",
            "range": "stddev: 0.000040677718095040953",
            "extra": "mean: 3.6691969573645347 msec\nrounds: 258"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 872.2764824312945,
            "unit": "iter/sec",
            "range": "stddev: 0.000011738197598829282",
            "extra": "mean: 1.1464254971230017 msec\nrounds: 869"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2987.0309396658563,
            "unit": "iter/sec",
            "range": "stddev: 0.00023014524494396264",
            "extra": "mean: 334.7805965852717 usec\nrounds: 1113"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.342907546681577,
            "unit": "iter/sec",
            "range": "stddev: 0.0031088843450354227",
            "extra": "mean: 157.65640483332768 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 36929.91264937288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019514791538477177",
            "extra": "mean: 27.078320208726012 usec\nrounds: 6705"
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
        "date": 1785042655521,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 291.82247517124273,
            "unit": "iter/sec",
            "range": "stddev: 0.0046640656921712485",
            "extra": "mean: 3.426740861591265 msec\nrounds: 289"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 247.3815243590196,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743592034596889",
            "extra": "mean: 4.042339065502406 msec\nrounds: 229"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 778.8164337276648,
            "unit": "iter/sec",
            "range": "stddev: 0.000037167613690440965",
            "extra": "mean: 1.2839996136363994 msec\nrounds: 748"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2181.533204475105,
            "unit": "iter/sec",
            "range": "stddev: 0.0003947341739675523",
            "extra": "mean: 458.3932061857423 usec\nrounds: 873"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 4.946941504687333,
            "unit": "iter/sec",
            "range": "stddev: 0.007122109068177066",
            "extra": "mean: 202.14510300000086 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 29504.721249431037,
            "unit": "iter/sec",
            "range": "stddev: 0.000003693297018619707",
            "extra": "mean: 33.892880788334296 usec\nrounds: 6241"
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
        "date": 1785129840463,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 482.8928318966375,
            "unit": "iter/sec",
            "range": "stddev: 0.0028660570993747398",
            "extra": "mean: 2.070852855844521 msec\nrounds: 437"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 372.4088736968235,
            "unit": "iter/sec",
            "range": "stddev: 0.00011967137634697203",
            "extra": "mean: 2.6852206556552027 msec\nrounds: 363"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1200.958923470327,
            "unit": "iter/sec",
            "range": "stddev: 0.000021495375084675132",
            "extra": "mean: 832.6679459696841 usec\nrounds: 1166"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 846.3001143831561,
            "unit": "iter/sec",
            "range": "stddev: 0.008059983019349211",
            "extra": "mean: 1.1816139251367954 msec\nrounds: 935"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 2.5431709784106395,
            "unit": "iter/sec",
            "range": "stddev: 0.20985185248739144",
            "extra": "mean: 393.2098975999452 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 51797.92735258191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016032931901493656",
            "extra": "mean: 19.305791777982293 usec\nrounds: 7007"
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
        "date": 1785214516349,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 317.9093295900729,
            "unit": "iter/sec",
            "range": "stddev: 0.003862623403327349",
            "extra": "mean: 3.145550969798359 msec\nrounds: 298"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 268.88226371987474,
            "unit": "iter/sec",
            "range": "stddev: 0.00002765073953698181",
            "extra": "mean: 3.7190998995821234 msec\nrounds: 239"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 865.5889195637334,
            "unit": "iter/sec",
            "range": "stddev: 0.000018886810042882372",
            "extra": "mean: 1.1552828108104842 msec\nrounds: 851"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2750.866274871478,
            "unit": "iter/sec",
            "range": "stddev: 0.00025217099666044327",
            "extra": "mean: 363.5218509655547 usec\nrounds: 1087"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.186994515780981,
            "unit": "iter/sec",
            "range": "stddev: 0.002866019749445637",
            "extra": "mean: 161.62936583333476 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37306.98936279317,
            "unit": "iter/sec",
            "range": "stddev: 0.00000242434415084609",
            "extra": "mean: 26.804628759385107 usec\nrounds: 6085"
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
        "date": 1785301199075,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 408.7093289494905,
            "unit": "iter/sec",
            "range": "stddev: 0.004066131229531185",
            "extra": "mean: 2.4467266322750927 msec\nrounds: 378"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 346.03847949935323,
            "unit": "iter/sec",
            "range": "stddev: 0.000023505741465617206",
            "extra": "mean: 2.8898520229507283 msec\nrounds: 305"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1086.8433174543015,
            "unit": "iter/sec",
            "range": "stddev: 0.00004588056016152357",
            "extra": "mean: 920.0958260867689 usec\nrounds: 1081"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1576.897514432428,
            "unit": "iter/sec",
            "range": "stddev: 0.0027484928049828087",
            "extra": "mean: 634.156621370495 usec\nrounds: 861"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 3.9859617647302854,
            "unit": "iter/sec",
            "range": "stddev: 0.1724899588953333",
            "extra": "mean: 250.88047980000283 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 48177.93050425163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014598602702906444",
            "extra": "mean: 20.756391765556465 usec\nrounds: 7165"
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
        "date": 1785386844128,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 534.965127732182,
            "unit": "iter/sec",
            "range": "stddev: 0.003339513985316253",
            "extra": "mean: 1.8692807216036462 msec\nrounds: 449"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 427.995642830611,
            "unit": "iter/sec",
            "range": "stddev: 0.0001409348497207084",
            "extra": "mean: 2.336472384126052 msec\nrounds: 315"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1465.1797059091657,
            "unit": "iter/sec",
            "range": "stddev: 0.00003099630001164261",
            "extra": "mean: 682.5101357648721 usec\nrounds: 1289"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 255.48980954854835,
            "unit": "iter/sec",
            "range": "stddev: 0.021016103471858998",
            "extra": "mean: 3.914050434211073 msec\nrounds: 228"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 1.4290501921748697,
            "unit": "iter/sec",
            "range": "stddev: 0.3712173398588001",
            "extra": "mean: 699.7654844285778 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 60006.81517842581,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017702533115183884",
            "extra": "mean: 16.664773776554785 usec\nrounds: 8275"
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
        "date": 1785474799881,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 314.71536369956124,
            "unit": "iter/sec",
            "range": "stddev: 0.00439778061075499",
            "extra": "mean: 3.177474363643195 msec\nrounds: 143"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 277.0553435567382,
            "unit": "iter/sec",
            "range": "stddev: 0.000044062581370986284",
            "extra": "mean: 3.609387161288264 msec\nrounds: 248"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 818.0165525588005,
            "unit": "iter/sec",
            "range": "stddev: 0.000018694756415113635",
            "extra": "mean: 1.2224691503759249 msec\nrounds: 798"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1384.625633057,
            "unit": "iter/sec",
            "range": "stddev: 0.0004676857935061769",
            "extra": "mean: 722.2168766240322 usec\nrounds: 770"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.2360340039949,
            "unit": "iter/sec",
            "range": "stddev: 0.007588588174062037",
            "extra": "mean: 190.98424479998357 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30708.791336215265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034424092667025874",
            "extra": "mean: 32.56396479599272 usec\nrounds: 6988"
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
        "date": 1785560658562,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 312.2301160934441,
            "unit": "iter/sec",
            "range": "stddev: 0.004339290425934985",
            "extra": "mean: 3.2027659999995657 msec\nrounds: 145"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 273.9219607629108,
            "unit": "iter/sec",
            "range": "stddev: 0.00003758292243693598",
            "extra": "mean: 3.650674802468779 msec\nrounds: 243"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 795.1411180364657,
            "unit": "iter/sec",
            "range": "stddev: 0.000016374330743718508",
            "extra": "mean: 1.257638395646569 msec\nrounds: 781"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1154.3607789383354,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007295401267244",
            "extra": "mean: 866.2802983653854 usec\nrounds: 734"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.057765979345022,
            "unit": "iter/sec",
            "range": "stddev: 0.001620350734805623",
            "extra": "mean: 197.7157511999991 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30115.091667158405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034905300763428977",
            "extra": "mean: 33.20594242422765 usec\nrounds: 6930"
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
        "date": 1785647219803,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 298.9434588607079,
            "unit": "iter/sec",
            "range": "stddev: 0.005030809882768368",
            "extra": "mean: 3.345114169117673 msec\nrounds: 136"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 272.4935061220501,
            "unit": "iter/sec",
            "range": "stddev: 0.00004795745628334827",
            "extra": "mean: 3.6698122250006904 msec\nrounds: 240"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 792.2845410456868,
            "unit": "iter/sec",
            "range": "stddev: 0.00002463481047004929",
            "extra": "mean: 1.2621728030691632 msec\nrounds: 782"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2394.3000892122595,
            "unit": "iter/sec",
            "range": "stddev: 0.0002797277618307078",
            "extra": "mean: 417.65859029350264 usec\nrounds: 886"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.695713379454723,
            "unit": "iter/sec",
            "range": "stddev: 0.003502930815761945",
            "extra": "mean: 175.57063239999877 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30302.4062629752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036865881020705064",
            "extra": "mean: 33.0006795936151 usec\nrounds: 6498"
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
        "date": 1785734072239,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 268.83352589721517,
            "unit": "iter/sec",
            "range": "stddev: 0.004521068662421703",
            "extra": "mean: 3.719774148936827 msec\nrounds: 94"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 272.6183520737741,
            "unit": "iter/sec",
            "range": "stddev: 0.0001917760768813462",
            "extra": "mean: 3.6681316294120467 msec\nrounds: 170"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 789.6810545836261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001790046543303286",
            "extra": "mean: 1.2663340397944187 msec\nrounds: 779"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2422.094580389675,
            "unit": "iter/sec",
            "range": "stddev: 0.00026665042703619455",
            "extra": "mean: 412.86579314302276 usec\nrounds: 875"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.763960686864758,
            "unit": "iter/sec",
            "range": "stddev: 0.0012066593596611374",
            "extra": "mean: 173.4918147999963 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30372.311087886606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038087968146502184",
            "extra": "mean: 32.92472532321817 usec\nrounds: 6808"
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
        "date": 1785819274588,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 288.3285517113781,
            "unit": "iter/sec",
            "range": "stddev: 0.005497068672933877",
            "extra": "mean: 3.4682656090230615 msec\nrounds: 133"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 273.14472784469,
            "unit": "iter/sec",
            "range": "stddev: 0.00013911244839292565",
            "extra": "mean: 3.661062792208091 msec\nrounds: 231"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 791.5854608448477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000154929727313234",
            "extra": "mean: 1.2632874774287977 msec\nrounds: 775"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2201.3967574465246,
            "unit": "iter/sec",
            "range": "stddev: 0.00032264903809397946",
            "extra": "mean: 454.25705140037286 usec\nrounds: 681"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.713025042270191,
            "unit": "iter/sec",
            "range": "stddev: 0.0018594809836940066",
            "extra": "mean: 175.0386165999771 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30385.761629588163,
            "unit": "iter/sec",
            "range": "stddev: 0.00000357141802973476",
            "extra": "mean: 32.910150885480824 usec\nrounds: 6707"
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
        "date": 1785905695147,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 335.7639120889182,
            "unit": "iter/sec",
            "range": "stddev: 0.0038586878954895397",
            "extra": "mean: 2.97828314478054 msec\nrounds: 297"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 282.97659584836384,
            "unit": "iter/sec",
            "range": "stddev: 0.000026300964646565154",
            "extra": "mean: 3.5338611555559925 msec\nrounds: 270"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 881.8929298138371,
            "unit": "iter/sec",
            "range": "stddev: 0.000015972547589705505",
            "extra": "mean: 1.133924500575251 msec\nrounds: 869"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2845.080516583026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002125081133728084",
            "extra": "mean: 351.48390148234233 usec\nrounds: 1147"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.9412992057375575,
            "unit": "iter/sec",
            "range": "stddev: 0.002320377712255143",
            "extra": "mean: 168.31335459999934 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 38464.71421709214,
            "unit": "iter/sec",
            "range": "stddev: 0.000001759152126406431",
            "extra": "mean: 25.997853366492475 usec\nrounds: 6431"
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
        "date": 1785992150268,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 412.6124507851821,
            "unit": "iter/sec",
            "range": "stddev: 0.0037119928491849813",
            "extra": "mean: 2.4235817365594445 msec\nrounds: 372"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 364.36634015635155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000247836410904166",
            "extra": "mean: 2.7444906123076427 msec\nrounds: 325"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1130.0794742528756,
            "unit": "iter/sec",
            "range": "stddev: 0.000019679921665997438",
            "extra": "mean: 884.893516591942 usec\nrounds: 1115"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2545.540930998885,
            "unit": "iter/sec",
            "range": "stddev: 0.0005948356572624165",
            "extra": "mean: 392.84381084675556 usec\nrounds: 756"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.711762100036439,
            "unit": "iter/sec",
            "range": "stddev: 0.04559949923329865",
            "extra": "mean: 175.07731983333485 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 48999.59756009957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014478335252913383",
            "extra": "mean: 20.40833088013566 usec\nrounds: 6658"
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
        "date": 1786076548484,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 444.32763878675036,
            "unit": "iter/sec",
            "range": "stddev: 0.0027799475520119588",
            "extra": "mean: 2.250591484091625 msec\nrounds: 440"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 342.459406495544,
            "unit": "iter/sec",
            "range": "stddev: 0.00013107730464814686",
            "extra": "mean: 2.920054117459354 msec\nrounds: 315"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1100.1116689504468,
            "unit": "iter/sec",
            "range": "stddev: 0.000043812875952425",
            "extra": "mean: 908.9986300700207 usec\nrounds: 1011"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1068.1592876792195,
            "unit": "iter/sec",
            "range": "stddev: 0.0026858782389088654",
            "extra": "mean: 936.1899592453963 usec\nrounds: 1006"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 4.340023456924027,
            "unit": "iter/sec",
            "range": "stddev: 0.032608412917264976",
            "extra": "mean: 230.41350120000175 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45163.790683474865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024062639729396254",
            "extra": "mean: 22.141631268473077 usec\nrounds: 7458"
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
        "date": 1786159252505,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 338.3490303444971,
            "unit": "iter/sec",
            "range": "stddev: 0.003455567890625066",
            "extra": "mean: 2.9555279025975905 msec\nrounds: 308"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 280.9649810201375,
            "unit": "iter/sec",
            "range": "stddev: 0.00007238123211708998",
            "extra": "mean: 3.5591624136544175 msec\nrounds: 249"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 854.5627671869979,
            "unit": "iter/sec",
            "range": "stddev: 0.00001925940578233627",
            "extra": "mean: 1.1701890585424688 msec\nrounds: 837"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2411.378577764407,
            "unit": "iter/sec",
            "range": "stddev: 0.00030735967533002427",
            "extra": "mean: 414.7005406870213 usec\nrounds: 1106"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.471663458168603,
            "unit": "iter/sec",
            "range": "stddev: 0.002259292353072102",
            "extra": "mean: 182.75977820001117 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 31392.43672063666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036568588351219003",
            "extra": "mean: 31.854806586027877 usec\nrounds: 6954"
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
        "date": 1786246108447,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 412.93744611426473,
            "unit": "iter/sec",
            "range": "stddev: 0.003803630212545554",
            "extra": "mean: 2.421674298153353 msec\nrounds: 379"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 359.2055597379556,
            "unit": "iter/sec",
            "range": "stddev: 0.000032850355910429626",
            "extra": "mean: 2.783921275409855 msec\nrounds: 305"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1125.8452094606905,
            "unit": "iter/sec",
            "range": "stddev: 0.00014205182249237878",
            "extra": "mean: 888.2215704226571 usec\nrounds: 1136"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2194.3514978959033,
            "unit": "iter/sec",
            "range": "stddev: 0.0010813774803382944",
            "extra": "mean: 455.7155045392087 usec\nrounds: 771"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 2.758587131537849,
            "unit": "iter/sec",
            "range": "stddev: 0.14678806832564717",
            "extra": "mean: 362.50440979999894 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 48441.94820302116,
            "unit": "iter/sec",
            "range": "stddev: 0.00000256137772583782",
            "extra": "mean: 20.64326553938294 usec\nrounds: 6387"
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
        "date": 1786333121204,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 332.47062077839905,
            "unit": "iter/sec",
            "range": "stddev: 0.0035410976712013315",
            "extra": "mean: 3.007784560508665 msec\nrounds: 314"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 272.33050515004874,
            "unit": "iter/sec",
            "range": "stddev: 0.000034028995796353484",
            "extra": "mean: 3.6720087580677743 msec\nrounds: 248"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 791.5496870448733,
            "unit": "iter/sec",
            "range": "stddev: 0.00001583782132867606",
            "extra": "mean: 1.2633445712464915 msec\nrounds: 779"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2346.3236932228315,
            "unit": "iter/sec",
            "range": "stddev: 0.00025699466514481013",
            "extra": "mean: 426.1986540426712 usec\nrounds: 977"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.328693152807552,
            "unit": "iter/sec",
            "range": "stddev: 0.006755447415831693",
            "extra": "mean: 187.66327339999407 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30208.930716935574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034059541281258163",
            "extra": "mean: 33.10279365298373 usec\nrounds: 7153"
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
        "date": 1786419098444,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 322.49988515464196,
            "unit": "iter/sec",
            "range": "stddev: 0.003597280067543652",
            "extra": "mean: 3.1007762980147726 msec\nrounds: 302"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 267.3766070545137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000416184378825019",
            "extra": "mean: 3.7400429716580117 msec\nrounds: 247"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 782.8664067241506,
            "unit": "iter/sec",
            "range": "stddev: 0.00003956212935036512",
            "extra": "mean: 1.2773571472870187 msec\nrounds: 774"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2315.4698986522235,
            "unit": "iter/sec",
            "range": "stddev: 0.00029008077762061955",
            "extra": "mean: 431.8777802216625 usec\nrounds: 1001"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.256217999454828,
            "unit": "iter/sec",
            "range": "stddev: 0.00750295224681471",
            "extra": "mean: 190.25086100000408 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30313.047906051983,
            "unit": "iter/sec",
            "range": "stddev: 0.00000406947731203278",
            "extra": "mean: 32.98909443548072 usec\nrounds: 6703"
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
        "date": 1786506616788,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 347.8247778940138,
            "unit": "iter/sec",
            "range": "stddev: 0.0029916643372211436",
            "extra": "mean: 2.8750108202605147 msec\nrounds: 306"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 271.53836853008795,
            "unit": "iter/sec",
            "range": "stddev: 0.00011976760001746031",
            "extra": "mean: 3.6827208081615717 msec\nrounds: 245"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 822.5542678117321,
            "unit": "iter/sec",
            "range": "stddev: 0.00006904716377615998",
            "extra": "mean: 1.2157252586632765 msec\nrounds: 808"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2401.6373574888044,
            "unit": "iter/sec",
            "range": "stddev: 0.00029610477027863953",
            "extra": "mean: 416.3825970152372 usec\nrounds: 938"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.389225441646433,
            "unit": "iter/sec",
            "range": "stddev: 0.0012917472600293633",
            "extra": "mean: 185.5554218000009 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 31014.009306556934,
            "unit": "iter/sec",
            "range": "stddev: 0.00000375115901866472",
            "extra": "mean: 32.24349325866042 usec\nrounds: 6972"
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
        "date": 1786593173268,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 320.6978592017939,
            "unit": "iter/sec",
            "range": "stddev: 0.004092928926484818",
            "extra": "mean: 3.1181997986795613 msec\nrounds: 303"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 271.94262190786094,
            "unit": "iter/sec",
            "range": "stddev: 0.00003674347915868561",
            "extra": "mean: 3.6772462991800454 msec\nrounds: 244"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 785.5327274584307,
            "unit": "iter/sec",
            "range": "stddev: 0.00004132917538354572",
            "extra": "mean: 1.2730214350654392 msec\nrounds: 770"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2326.9737141693818,
            "unit": "iter/sec",
            "range": "stddev: 0.000337372896243296",
            "extra": "mean: 429.74271428629015 usec\nrounds: 959"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.419940196726667,
            "unit": "iter/sec",
            "range": "stddev: 0.0018825094098811274",
            "extra": "mean: 184.50388080000266 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30129.786838724314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036716378898466414",
            "extra": "mean: 33.18974692229651 usec\nrounds: 6417"
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
        "date": 1786679444065,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 331.1425226404886,
            "unit": "iter/sec",
            "range": "stddev: 0.003577105586365868",
            "extra": "mean: 3.0198477441861784 msec\nrounds: 301"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 275.578324320174,
            "unit": "iter/sec",
            "range": "stddev: 0.000030442648657268893",
            "extra": "mean: 3.6287324210527325 msec\nrounds: 247"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 827.3724430415397,
            "unit": "iter/sec",
            "range": "stddev: 0.000016294418667762853",
            "extra": "mean: 1.2086455240445968 msec\nrounds: 811"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 965.8979778867672,
            "unit": "iter/sec",
            "range": "stddev: 0.007601608064335984",
            "extra": "mean: 1.0353060290982725 msec\nrounds: 1031"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.471726241184142,
            "unit": "iter/sec",
            "range": "stddev: 0.0014816407449519987",
            "extra": "mean: 182.75768119999896 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30662.14145617868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038858367190833455",
            "extra": "mean: 32.61350814094857 usec\nrounds: 6756"
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
        "date": 1786761908474,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 341.9212477408762,
            "unit": "iter/sec",
            "range": "stddev: 0.003158465248447186",
            "extra": "mean: 2.9246500666663637 msec\nrounds: 300"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 271.5036982433546,
            "unit": "iter/sec",
            "range": "stddev: 0.00004806745137460454",
            "extra": "mean: 3.683191081631892 msec\nrounds: 245"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 823.5739530390996,
            "unit": "iter/sec",
            "range": "stddev: 0.00002438410674652233",
            "extra": "mean: 1.214220042183054 msec\nrounds: 806"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2252.406289681402,
            "unit": "iter/sec",
            "range": "stddev: 0.0003249300447178709",
            "extra": "mean: 443.9696357540574 usec\nrounds: 895"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.4413506442213055,
            "unit": "iter/sec",
            "range": "stddev: 0.0033624874387455255",
            "extra": "mean: 183.77790100000198 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30352.455036641855,
            "unit": "iter/sec",
            "range": "stddev: 0.000004152764504696673",
            "extra": "mean: 32.94626410920592 usec\nrounds: 6804"
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
        "date": 1786848884323,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 345.563106828492,
            "unit": "iter/sec",
            "range": "stddev: 0.0029558514911222876",
            "extra": "mean: 2.893827437708258 msec\nrounds: 297"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 275.78622649297523,
            "unit": "iter/sec",
            "range": "stddev: 0.000044113205226201365",
            "extra": "mean: 3.6259968915651113 msec\nrounds: 249"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 828.5886272816557,
            "unit": "iter/sec",
            "range": "stddev: 0.000011810763545296683",
            "extra": "mean: 1.206871500615079 msec\nrounds: 813"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2541.7565774906925,
            "unit": "iter/sec",
            "range": "stddev: 0.00026752757939135124",
            "extra": "mean: 393.4287055085478 usec\nrounds: 944"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.435638124961691,
            "unit": "iter/sec",
            "range": "stddev: 0.002380370890319033",
            "extra": "mean: 183.9710402000037 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30874.898237843987,
            "unit": "iter/sec",
            "range": "stddev: 0.000003475156203156412",
            "extra": "mean: 32.38877071906523 usec\nrounds: 7083"
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
        "date": 1786935246526,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 428.4688278103305,
            "unit": "iter/sec",
            "range": "stddev: 0.0027372382204094957",
            "extra": "mean: 2.3338920712399367 msec\nrounds: 379"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 330.6111692048003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000762234813062697",
            "extra": "mean: 3.024701199312901 msec\nrounds: 291"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1025.6977237140077,
            "unit": "iter/sec",
            "range": "stddev: 0.000012000163622285643",
            "extra": "mean: 974.9461043737551 usec\nrounds: 1006"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2046.1463037001618,
            "unit": "iter/sec",
            "range": "stddev: 0.00051836594606018",
            "extra": "mean: 488.7236060254556 usec\nrounds: 863"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 4.169232148079129,
            "unit": "iter/sec",
            "range": "stddev: 0.05040700984936615",
            "extra": "mean: 239.85231920000558 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 43236.42111808985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023028637151956987",
            "extra": "mean: 23.128648813664327 usec\nrounds: 7207"
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
        "date": 1787021294603,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 519.4386081067533,
            "unit": "iter/sec",
            "range": "stddev: 0.0022252911243488094",
            "extra": "mean: 1.9251553203655651 msec\nrounds: 437"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 396.0452657700103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000267620507178569",
            "extra": "mean: 2.524963902941124 msec\nrounds: 340"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1235.4776048733552,
            "unit": "iter/sec",
            "range": "stddev: 0.00001752260127204486",
            "extra": "mean: 809.403582918451 usec\nrounds: 1206"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 849.5351787958466,
            "unit": "iter/sec",
            "range": "stddev: 0.012984988216880504",
            "extra": "mean: 1.1771142913910007 msec\nrounds: 755"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 1.082836367495484,
            "unit": "iter/sec",
            "range": "stddev: 0.8328441028295723",
            "extra": "mean: 923.5005675999986 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50429.6384458002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031204208636203362",
            "extra": "mean: 19.829608754279704 usec\nrounds: 8156"
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
        "date": 1787107895428,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 349.39696301737774,
            "unit": "iter/sec",
            "range": "stddev: 0.003381260815093192",
            "extra": "mean: 2.862074104376985 msec\nrounds: 297"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 280.9445623911543,
            "unit": "iter/sec",
            "range": "stddev: 0.000027104602467057698",
            "extra": "mean: 3.5594210882348993 msec\nrounds: 238"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 861.1107303414683,
            "unit": "iter/sec",
            "range": "stddev: 0.000019317925403096632",
            "extra": "mean: 1.1612908360849898 msec\nrounds: 848"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2870.064886863416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002450727663281886",
            "extra": "mean: 348.42417834422605 usec\nrounds: 942"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 15.602372756425144,
            "unit": "iter/sec",
            "range": "stddev: 0.001668503190044933",
            "extra": "mean: 64.09281559999869 msec\nrounds: 10"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 36971.77357944851,
            "unit": "iter/sec",
            "range": "stddev: 0.000002164717211219609",
            "extra": "mean: 27.047661044745485 usec\nrounds: 6107"
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
          "id": "ee31084f967d41c573e165e9d1ab50e906dbaa55",
          "message": "fix(frontend): stop hover hijacking the pill filter list\n\nThe option list set its highlight from a bare mousemove. The list is\nvirtualized and the arrow keys scroll it, so a row the user never pointed at\narrives under a cursor that has not moved, and the browser reports that as a\nmousemove at unchanged coordinates. Obeying it hands the highlight straight\nback, so the arrows could not advance past one row and a wheel scroll dragged\nthe highlight along with it.\n\nPointer moves are now taken only when the coordinates actually changed.\n\nSame defect and same fix as the send form's token picker in #12961, which is\nwhere it was spotted; this list is the other virtualized picker in the app.",
          "timestamp": "2026-08-19T15:24:59Z",
          "url": "https://github.com/rotki/rotki/commit/ee31084f967d41c573e165e9d1ab50e906dbaa55"
        },
        "date": 1787194113195,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 345.7983769345264,
            "unit": "iter/sec",
            "range": "stddev: 0.0029325663203375344",
            "extra": "mean: 2.8918585704910367 msec\nrounds: 305"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 274.87173516020795,
            "unit": "iter/sec",
            "range": "stddev: 0.000034093026298716494",
            "extra": "mean: 3.6380604918041275 msec\nrounds: 244"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 865.2770679437848,
            "unit": "iter/sec",
            "range": "stddev: 0.000022492856667867294",
            "extra": "mean: 1.1556991824322425 msec\nrounds: 888"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2851.377995974288,
            "unit": "iter/sec",
            "range": "stddev: 0.00025409391219778724",
            "extra": "mean: 350.70762326560975 usec\nrounds: 937"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 15.863917401324779,
            "unit": "iter/sec",
            "range": "stddev: 0.0017373944381843258",
            "extra": "mean: 63.03613254545129 msec\nrounds: 11"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37884.234525967964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020507062253610606",
            "extra": "mean: 26.39620445054906 usec\nrounds: 6471"
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "78f86bda7e29e5f4aa3471f6c4fa9b50f993beee",
          "message": "Fix the ETH staking total when filtering (#12974)\n\n* fix(staking): correct staked total when filtering\n\nApplying a validator filter left the staked total showing a number that\nbelonged to a different filter, so it disagreed with the validator count\nbeside it. Two causes, both here.\n\nRequests were not ordered. Filter changes run concurrently, so whichever\nresponse landed last won rather than the one belonging to the newest\nfilter. The total is now keyed to the filter it was asked for, and an\nanswer is dropped once a newer filter supersedes it. Keyed by filter\nrather than by call on purpose: the premium component re-emits\n`update:filter` after every change, so the same filter is requested\ntwice as a matter of course and both answers are equally valid.\n\nThe recompute also went through the async task orchestrator, so a\nmillisecond-scale database read arrived on the polling cadence and the\ntotal trailed the count beside it by roughly two seconds. It now uses a\nsynchronous sibling of the validators query, which drops that to well\nunder a tenth of a second. The async query is untouched for the actual\nvalidator fetch, which is a real background job.\n\nA selection made only of exited validators still totals zero. That is\nthe backend contract, since balances are only reported for validators\nthat have not exited.\n\n* feat(staking): show optional API key in a popover\n\nThe Beaconcha.in prompt occupied a full-width row on every visit to the\nETH staking page, for a key the page works perfectly well without. A\nnotice that is always present stops being read, and it sat directly\nabove a second alert.\n\nIt now sits in the page header as a button that opens the same guidance\non demand, and it can be dismissed for good. The dismissal is persisted\nin a new frontend setting, so it does not return on the next login. The\nsetting takes no `.catch`: an unreadable value should surface rather\nthan silently re-show every prompt.\n\nProminence follows severity. A missing consensus RPC means there is no\nstaking data at all, which is a fault rather than an offer, so that case\nkeeps the inline alert and cannot be dismissed.\n\nRuiMenu supplies neither the disclosure semantics nor the focus move, so\nboth are wired here: the trigger announces `aria-haspopup` and its\nexpanded state, the panel is a labelled dialog, focus enters it on open\nand returns to the trigger on close. Without the focus move the panel is\nteleported to the end of the document and a keyboard user reaches its\nlink only after tabbing through the rest of the page.",
          "timestamp": "2026-08-20T14:57:25Z",
          "url": "https://github.com/rotki/rotki/commit/78f86bda7e29e5f4aa3471f6c4fa9b50f993beee"
        },
        "date": 1787281008163,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 345.85073606083023,
            "unit": "iter/sec",
            "range": "stddev: 0.0032527182873556475",
            "extra": "mean: 2.8914207654718256 msec\nrounds: 307"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 277.0934824287294,
            "unit": "iter/sec",
            "range": "stddev: 0.00005132030262816248",
            "extra": "mean: 3.6088903688205938 msec\nrounds: 263"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 827.2877142912032,
            "unit": "iter/sec",
            "range": "stddev: 0.00008272204600382843",
            "extra": "mean: 1.208769310513419 msec\nrounds: 818"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2304.083710081661,
            "unit": "iter/sec",
            "range": "stddev: 0.0003528947768733221",
            "extra": "mean: 434.01200903614654 usec\nrounds: 996"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 13.6376489785807,
            "unit": "iter/sec",
            "range": "stddev: 0.0025877561695575105",
            "extra": "mean: 73.32642170000128 msec\nrounds: 10"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 31269.967213747546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037136665939593584",
            "extra": "mean: 31.979566629042047 usec\nrounds: 7084"
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
          "id": "ef14aadd1f387a199731fcc03254463b45b6e0cb",
          "message": "fix(notifications): report monerium success inline only\n\nA completed authorization raised a notification saying it had worked,\nfor something the user was already looking at: the card flips to its\nconnected state naming the account as soon as the token round trip\nlands. The entry then had to be dismissed by hand, and it sat in the\nsame group as the \"opening browser\" step and the session-expired\nwarning, so the trail of the flow outlived the flow.\n\nSuccess now raises nothing and clears that group instead, which also\nretires the expiry warning the re-authentication just resolved. One\nremoval is enough because a group holds a single entry, the dispatcher\nreplacing rather than appending. Failures still report, since nothing\non the card shows them.\n\nThe card also drops to one notification composable: useNotifications\ncovers both notify and removeMatching, and its Notification type is the\nsame SemiPartial the card was already building.",
          "timestamp": "2026-08-21T13:28:52Z",
          "url": "https://github.com/rotki/rotki/commit/ef14aadd1f387a199731fcc03254463b45b6e0cb"
        },
        "date": 1787366750979,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 342.0328526830622,
            "unit": "iter/sec",
            "range": "stddev: 0.003239175372092191",
            "extra": "mean: 2.9236957565787685 msec\nrounds: 304"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 272.4917842821279,
            "unit": "iter/sec",
            "range": "stddev: 0.00006066380435171743",
            "extra": "mean: 3.669835414063849 msec\nrounds: 256"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 792.8209075300284,
            "unit": "iter/sec",
            "range": "stddev: 0.000023374594682216916",
            "extra": "mean: 1.261318906328318 msec\nrounds: 790"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2356.9816345093354,
            "unit": "iter/sec",
            "range": "stddev: 0.0003936579200605561",
            "extra": "mean: 424.2714433403615 usec\nrounds: 1006"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 13.356879535134006,
            "unit": "iter/sec",
            "range": "stddev: 0.00247117624982159",
            "extra": "mean: 74.86778610000897 msec\nrounds: 10"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 31240.91047950079,
            "unit": "iter/sec",
            "range": "stddev: 0.000003757437698971144",
            "extra": "mean: 32.00931037705081 usec\nrounds: 6505"
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
          "id": "ef14aadd1f387a199731fcc03254463b45b6e0cb",
          "message": "fix(notifications): report monerium success inline only\n\nA completed authorization raised a notification saying it had worked,\nfor something the user was already looking at: the card flips to its\nconnected state naming the account as soon as the token round trip\nlands. The entry then had to be dismissed by hand, and it sat in the\nsame group as the \"opening browser\" step and the session-expired\nwarning, so the trail of the flow outlived the flow.\n\nSuccess now raises nothing and clears that group instead, which also\nretires the expiry warning the re-authentication just resolved. One\nremoval is enough because a group holds a single entry, the dispatcher\nreplacing rather than appending. Failures still report, since nothing\non the card shows them.\n\nThe card also drops to one notification composable: useNotifications\ncovers both notify and removeMatching, and its Notification type is the\nsame SemiPartial the card was already building.",
          "timestamp": "2026-08-21T13:28:52Z",
          "url": "https://github.com/rotki/rotki/commit/ef14aadd1f387a199731fcc03254463b45b6e0cb"
        },
        "date": 1787453786461,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 354.7304239287858,
            "unit": "iter/sec",
            "range": "stddev: 0.002940774390020911",
            "extra": "mean: 2.819042102238053 msec\nrounds: 313"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 281.1530332151057,
            "unit": "iter/sec",
            "range": "stddev: 0.000041432918294631246",
            "extra": "mean: 3.5567818300395713 msec\nrounds: 253"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 852.3921634885936,
            "unit": "iter/sec",
            "range": "stddev: 0.000019622583585599844",
            "extra": "mean: 1.1731689272075079 msec\nrounds: 838"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1750.4815832802535,
            "unit": "iter/sec",
            "range": "stddev: 0.0003409643605656005",
            "extra": "mean: 571.2713630074788 usec\nrounds: 1157"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 12.400038346373604,
            "unit": "iter/sec",
            "range": "stddev: 0.004224006484192095",
            "extra": "mean: 80.64491190000638 msec\nrounds: 10"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 31235.90431043667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031642604867927766",
            "extra": "mean: 32.01444049967447 usec\nrounds: 7042"
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
          "id": "ef14aadd1f387a199731fcc03254463b45b6e0cb",
          "message": "fix(notifications): report monerium success inline only\n\nA completed authorization raised a notification saying it had worked,\nfor something the user was already looking at: the card flips to its\nconnected state naming the account as soon as the token round trip\nlands. The entry then had to be dismissed by hand, and it sat in the\nsame group as the \"opening browser\" step and the session-expired\nwarning, so the trail of the flow outlived the flow.\n\nSuccess now raises nothing and clears that group instead, which also\nretires the expiry warning the re-authentication just resolved. One\nremoval is enough because a group holds a single entry, the dispatcher\nreplacing rather than appending. Failures still report, since nothing\non the card shows them.\n\nThe card also drops to one notification composable: useNotifications\ncovers both notify and removeMatching, and its Notification type is the\nsame SemiPartial the card was already building.",
          "timestamp": "2026-08-21T13:28:52Z",
          "url": "https://github.com/rotki/rotki/commit/ef14aadd1f387a199731fcc03254463b45b6e0cb"
        },
        "date": 1787540223314,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 342.29926351741153,
            "unit": "iter/sec",
            "range": "stddev: 0.0028748484620317117",
            "extra": "mean: 2.9214202500004314 msec\nrounds: 312"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 275.3032958239576,
            "unit": "iter/sec",
            "range": "stddev: 0.0001147593950121128",
            "extra": "mean: 3.632357531380405 msec\nrounds: 239"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 789.1119037348002,
            "unit": "iter/sec",
            "range": "stddev: 0.00002199616002094652",
            "extra": "mean: 1.267247389460334 msec\nrounds: 778"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2468.7592832406726,
            "unit": "iter/sec",
            "range": "stddev: 0.0002565046853140793",
            "extra": "mean: 405.06176798546653 usec\nrounds: 1112"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 13.756403621361617,
            "unit": "iter/sec",
            "range": "stddev: 0.0021702209579937837",
            "extra": "mean: 72.69341810000043 msec\nrounds: 10"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 29930.692879098686,
            "unit": "iter/sec",
            "range": "stddev: 0.000003987418109673639",
            "extra": "mean: 33.41051956395984 usec\nrounds: 7156"
          }
        ]
      }
    ]
  }
}