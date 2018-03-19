/**
 * @flow
 * @relayHash dc61967fc616271a8148efb1ddf72f3f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelayQueryQueryVariables = {| |};
export type RelayQueryQueryResponse = {|
  +viewer: {|
    +allLinks: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string,
        |},
      |}>,
    |},
  |},
|};
*/


/*
query RelayQueryQuery {
  viewer {
    allLinks {
      edges {
        node {
          id
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allLinks",
  "storageKey": null,
  "args": null,
  "concreteType": "LinkConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "LinkEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Link",
          "plural": false,
          "selections": [
            v0
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RelayQueryQuery",
  "id": null,
  "text": "query RelayQueryQuery {\n  viewer {\n    allLinks {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RelayQueryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RelayQueryQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1,
          v0
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '63d35a3b47e0131473385076d4c28c3f';
module.exports = node;
