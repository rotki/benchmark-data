window.BENCHMARK_DATA = {
  "lastUpdate": 1784090362596,
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
      }
    ]
  }
}