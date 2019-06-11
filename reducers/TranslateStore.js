import {CHANGE_LANGUAGE  } from "../types";

const initialState = {
  currentLanguage:   {
    language:"ru",
    auth:{
      signIn:"Войти",
      signUp:"",
      login:"",
      password:"",
      forgotPassword:"",
      username:"",
    },
    mainTabs:{
      home:{
        title:"Товары",
        placeholder:""
      },
      addProduct:{
        title:""
      },
      profile:{
        title:""
      },
      searchBar:{
        placeholder:"Найдите товар",
        price:"Цена товара",
        minPrice:"минимальная цена",
        maxPrice:"максимальная цена",
        ownCategories:"Ваши рубрики"
      },
      changePassword:{
        title:"Сменить пароль",
        change:"Сменить",
        oldPassword:"Старый пароль",
        newPassword:"Новый пароль"
      }
    }
  },
  languages: [
    {
      language:"ru",
      auth:{
        signIn:"",
        signUp:"",
        login:"",
        password:"",
        forgotPassword:"",
        username:"",
      },
      mainTabs:{
        home:{
          title:"",
          placeholder:""
        },
        addProduct:{
          title:""
        },
        profile:{
          title:""
        }
      }
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      switch (action.payload){
        case "ru":{
          const cur = state.languages.find(item => {
            return item.language === "ru"
          })
          return {
            ...state,
            currentLanguage: cur
          };
        }
        case "en":{
          const cur = state.languages.find(item => {
            return item.language === "en"
          })
          return {
            ...state,
            currentLanguage: cur
          };
        }
        default:
          return {
            ...state
          }
      }
     
   
    default:
      return state;
  }
}
