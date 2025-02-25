(function(window, undefined) {
  var dictionary = {
    "fe2a9e38-0879-4178-823e-254d56d92f82": "About Us",
    "5694afd7-dc9d-4e5f-81d6-cd8d3021cb52": "Entertainment",
    "91b2eaac-7995-453c-aae6-d0a7f443f784": "Ground Transportation",
    "bbc30d45-cb46-4396-8152-73810677e689": "Lodging",
    "fb746c24-691f-4f8e-914b-2b7854c2db4e": "Food",
    "100d85ef-10e5-405e-8c8a-ee00e8c5142d": "Sightseeing",
    "fe8915d5-6d4a-46f1-96e7-2788adb603d5": "Sitemap",
    "5c281a1e-bd59-4930-b4fa-815a8d467ccf": "FAQs",
    "c17b24bb-89a4-4c73-a4d5-b36f9ef717c7": "Book Now",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Homepage",
    "0186f70e-ecb9-481b-8644-0ab2433e96f5": "Transportation",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);