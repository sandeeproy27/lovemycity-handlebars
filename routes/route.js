exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCountry',
                    headline:'Believing in cities of tomorrow starts with building today'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,headline;
    var imageArray=[1,2,3,4];

    if(cityName==='rome'){
       title="Rome";
       headline="Rome: Spartacus was here";
    }
    else if(cityName==='africa'){
       title="Africa";
       headline="Africa: Mother Nature will reward the humanity";
    }
   
    else if(cityName==='japan'){
       title="Japan";
       headline="Japan: Engineering redefined";
    
    }

    res.render('city',{
      title:title,
      headline:headline,
      city:cityName,
      imageArray:imageArray});
  }
