/*// listen for form submit
document.getElementById('myForm').addEvenListener('submit', saveBookmark);

//save bookmark
function saveBookmark(e) {
    //get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;
    
    if(!validateForm(siteName, siteURL)){
        return false;
    }
    
    var bookmark = {
        name: siteName,
        url: siteURL
    }
    
    //local storage
    //localStorage.setItem('')
    
    //test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null){
        //initiate array
        var bookmarks = [];
        
        //add to array
        bookmarks.push(bookmark);
        
        //set to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else{
        //get bookmarks from localstorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //add bookmark to array
        bookmarks.push(bookmark);
        //Re set back to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }
    //clear form
    document.getElementById('myForm').reset();
    //refectch bookmarks
    fetchBookmarks();
    
    //prevent from submitting
    e.preventDefault();
}

//delete bookmark
function deleteBookmark(url){
    //get bookmarks from locoal storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks 
    for(var i =0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i, 1);
        }
    }
    //Re set back to localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    //refectch bookmarks
    fetchBookmarks();
}

//fetching bookmarks
function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    //get id
    var bookmarksResults = document.getElementById('bookmarksResults');
    
    //build our output
    bookmarksResults.inneHTML = " "
    
    for(var i = 0; i < bookmarks.length; i++){
        var name=bookmarks[i].name;
        var url=bookmarks[i].url;
        bookmarksResults.innerHTML+= '<div class="well">'+
                                     '<h3>'+name+
                                    ' <a class="btn btn-default" href="' +url+ '">Vist</a> '
                                    '<h3>' + 
                                    ' <a onclick="deletebookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '
                                    '<h3>' + 
                                     '</div>';
    }
}


//validate form
function validateForm(siteName, siteURL){
      if(!siteName || !siteURL){
        alert('Please fill in the form');
        return false;
    }
    //https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if(!siteURL.match(regex)){
        alert('Please use a valid URL');
        return false;
    }
    return true;
}*/

// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
  var siteUrl =document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)){
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  /*
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks(){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}

// Validate Form
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}