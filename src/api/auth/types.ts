export type tokenParams = {
  username: string;
  password: string;
};

export interface ServerData {
  access: string;
  refresh: string;
}

//Refresh токен нужно хранить в cookie, а access в самом приложении
//можно и в localstorage - но это не безопасно - так как все скрипты на странице будут иметь доступ к ним
