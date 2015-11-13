var stormpath_config = {
  web:{
    register:{
      enabled:true,
      fields:{
        username:{
          required:true,
          placeholder: 'id'
        }
      }
    },
    login:{
      enabled:true
    },
    logout:{
      enabled:true
    }
  }

};
module.exports = stormpath_config;
