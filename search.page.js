//Often used
const Control_Group = '.control-group'
const Lable_Input = 'label'
const Controls = '.controls'
const List = 'li'

//Visit the page
const URL = 'http://zero.webappsecurity.com/index.html'

//Getting the signin button
const ButtonType_ID = '#signin_button'
const Icon = 'i'

//Process of the username typing
const LableUser_Input = 'Login'
const InputType_User = 'input[type="text"]'

//Process of the password typing
const LablePass_Input = 'Password'
const InputType_Pass = 'input[type="password"]'

//Press sign in button
const FormSignIn = '.form-actions'
const InputType_Submit = 'input[type="submit"]'

//Search the data with account keyword
const Form_Search = 'form[action="/search.html"]'

// const InputType_Search = 'input[type="text"]'
const InputTypeSearch_ID = '#searchTerm'

//Some data displayed with account keyword
const Link_Account1 = 'a[href="/bank/account-summary.html"]'
const Link_Account2 = 'a[href="/bank/account-activity.html"]'

class SearchPage{
    //Visit the page
    static visit() {
       cy.visit(URL);
    }
    //Getting the signin button
    static gettingSigninButton() {
       cy.get(ButtonType_ID)
       .children(Icon)
       .and('have.text', '')
       .click();
    }
    //Process of the username typing
    static usernameTyping() {
       cy.get(Control_Group)
       .children(Lable_Input)
       .contains(LableUser_Input);
 
       cy.get(Controls)
       .children(InputType_User)
       .type('username');
    }
    //Process of the password typing
    static passwordTyping() {
       cy.get(Control_Group)
       .children(Lable_Input)
       .contains(LablePass_Input);
 
     cy.get(Controls)
       .children(InputType_Pass)
       .type('password');
    }
    //Press sign in button
    static pressSignIn() {
       cy.get(FormSignIn)
       .children(InputType_Submit)
       .should('have.value', 'Sign in')
       .click();
    }
    //Search the data with account keyword
    static searchAccountKeyword() {
       cy.get(List)
       .children(Form_Search);
     
       cy.get(InputTypeSearch_ID)
       .should('have.attr', 'placeholder', 'Search')
       .type('account{enter}');
    }
    //Some data displayed with account keyword
    static dataResult() {
       cy.get(List)
       .children(Link_Account1)
       .contains('Zero - Account Summary');
 
       cy.get(List)
       .children(Link_Account2)
       .contains('Zero - Account Activity');
    }
 }
 
 export default SearchPage;