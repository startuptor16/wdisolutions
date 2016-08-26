var content = [
  { 
    title: 'Computers',
    children: [
      {
        title: 'Laptops',
        children: [
          {
            title: 'Ultrabooks',
            children: []
          },
          {
            title: 'Macbooks',
            children: []            
          }
        ]
      },
      {
        title: 'Desktops',
        children: []
      }
    ]
  },
  {
    title: 'Printers',
    children: [
    	{
    		title: 'HP',
    		children: []
    	}
    ]
  }
];



function strList(list){
  var str = ''
  relist(list);
  $('.tree').append(str)

  function relist (arr){
    str += '<ol>';
    for(var i = 0;i<arr.length;i++){
      str += '<li>' + arr[i].title;
      if(arr[i].children.length != 0){
        relist(arr[i].children)
      }
    str += '</li>';
    }
  }
}

strList(content);