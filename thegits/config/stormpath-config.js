var stormpath_config = {
  web:{
    register:{
      enabled:true,
      fields:{
        username:{
          required:true,
        }
      }
    },
    login:{
      enabled:true
    },
    logout:{
      enabled:true
    }
  },
  expand:{
    customData:true
  }

};
module.exports = stormpath_config;
