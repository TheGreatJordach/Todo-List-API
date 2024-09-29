"use strict";

customElements.define(
  "compodoc-menu",
  class extends HTMLElement {
    constructor() {
      super();
      this.isNormalMode = this.getAttribute("mode") === "normal";
    }

    connectedCallback() {
      this.render(this.isNormalMode);
    }

    render(isNormalMode) {
      let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">todo-list-api documentation</a>
                </li>

                <li class="divider"></li>
                ${isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : ""}
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#modules-links"'
                                : 'data-bs-target="#xs-modules-links"'
                            }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"'}>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-bs-target="#controllers-links-module-AuthModule-a3e7a747bc62ae663748572751d982e1369117973b762fc1ba40c5cd85487a964620457cbb585c35e6313a842b2adbadff10d65d83cd09bae59aac89b8ce1d1b"'
                                            : 'data-bs-target="#xs-controllers-links-module-AuthModule-a3e7a747bc62ae663748572751d982e1369117973b762fc1ba40c5cd85487a964620457cbb585c35e6313a842b2adbadff10d65d83cd09bae59aac89b8ce1d1b"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="controllers-links-module-AuthModule-a3e7a747bc62ae663748572751d982e1369117973b762fc1ba40c5cd85487a964620457cbb585c35e6313a842b2adbadff10d65d83cd09bae59aac89b8ce1d1b"'
                                            : 'id="xs-controllers-links-module-AuthModule-a3e7a747bc62ae663748572751d982e1369117973b762fc1ba40c5cd85487a964620457cbb585c35e6313a842b2adbadff10d65d83cd09bae59aac89b8ce1d1b"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-AuthModule-a3e7a747bc62ae663748572751d982e1369117973b762fc1ba40c5cd85487a964620457cbb585c35e6313a842b2adbadff10d65d83cd09bae59aac89b8ce1d1b"'
                                        : 'data-bs-target="#xs-injectables-links-module-AuthModule-a3e7a747bc62ae663748572751d982e1369117973b762fc1ba40c5cd85487a964620457cbb585c35e6313a842b2adbadff10d65d83cd09bae59aac89b8ce1d1b"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AuthModule-a3e7a747bc62ae663748572751d982e1369117973b762fc1ba40c5cd85487a964620457cbb585c35e6313a842b2adbadff10d65d83cd09bae59aac89b8ce1d1b"'
                                        : 'id="xs-injectables-links-module-AuthModule-a3e7a747bc62ae663748572751d982e1369117973b762fc1ba40c5cd85487a964620457cbb585c35e6313a842b2adbadff10d65d83cd09bae59aac89b8ce1d1b"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BcryptProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BcryptProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PasswordProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurationModule.html" data-type="entity-link" >ConfigurationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TodosModule.html" data-type="entity-link" >TodosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-bs-target="#controllers-links-module-TodosModule-17b035da7808bc2c85763b5502d60f9b9b1c9bf79a345b629d5a637707196d76fbd2c1ffd749d42b82319b7f41bb8809b475ca8a46305e6ed7bd0933ea800c06"'
                                            : 'data-bs-target="#xs-controllers-links-module-TodosModule-17b035da7808bc2c85763b5502d60f9b9b1c9bf79a345b629d5a637707196d76fbd2c1ffd749d42b82319b7f41bb8809b475ca8a46305e6ed7bd0933ea800c06"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="controllers-links-module-TodosModule-17b035da7808bc2c85763b5502d60f9b9b1c9bf79a345b629d5a637707196d76fbd2c1ffd749d42b82319b7f41bb8809b475ca8a46305e6ed7bd0933ea800c06"'
                                            : 'id="xs-controllers-links-module-TodosModule-17b035da7808bc2c85763b5502d60f9b9b1c9bf79a345b629d5a637707196d76fbd2c1ffd749d42b82319b7f41bb8809b475ca8a46305e6ed7bd0933ea800c06"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/TodoListController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoListController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-UsersModule-3640f260a6926ad534f232224a36caf6578c93bc3949f3f076922c637f3bca364f40a31cb40b978648114015cceefc258534ca4acd42ab6806bc8b9d74110a27"'
                                        : 'data-bs-target="#xs-injectables-links-module-UsersModule-3640f260a6926ad534f232224a36caf6578c93bc3949f3f076922c637f3bca364f40a31cb40b978648114015cceefc258534ca4acd42ab6806bc8b9d74110a27"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-UsersModule-3640f260a6926ad534f232224a36caf6578c93bc3949f3f076922c637f3bca364f40a31cb40b978648114015cceefc258534ca4acd42ab6806bc8b9d74110a27"'
                                        : 'id="xs-injectables-links-module-UsersModule-3640f260a6926ad534f232224a36caf6578c93bc3949f3f076922c637f3bca364f40a31cb40b978648114015cceefc258534ca4acd42ab6806bc8b9d74110a27"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#controllers-links"'
                                : 'data-bs-target="#xs-controllers-links"'
                            }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"'}>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TodoListController.html" data-type="entity-link" >TodoListController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#entities-links"'
                                : 'data-bs-target="#xs-entities-links"'
                            }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"'}>
                                <li class="link">
                                    <a href="entities/Todo.html" data-type="entity-link" >Todo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                          isNormalMode
                            ? 'data-bs-target="#classes-links"'
                            : 'data-bs-target="#xs-classes-links"'
                        }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"'}>
                            <li class="link">
                                <a href="classes/BaseTodoDto.html" data-type="entity-link" >BaseTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseUserDto.html" data-type="entity-link" >BaseUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTodoDto.html" data-type="entity-link" >CreateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvValidations.html" data-type="entity-link" >EnvValidations</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdDto.html" data-type="entity-link" >IdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoDto.html" data-type="entity-link" >UpdateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#injectables-links"'
                                : 'data-bs-target="#xs-injectables-links"'
                            }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"'}>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasswordProvider.html" data-type="entity-link" >PasswordProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                          isNormalMode
                            ? 'data-bs-target="#interfaces-links"'
                            : 'data-bs-target="#xs-interfaces-links"'
                        }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"'}>
                            <li class="link">
                                <a href="interfaces/HashAlgoInterface.html" data-type="entity-link" >HashAlgoInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                          isNormalMode
                            ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"'
                        }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"'}>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
      this.innerHTML = tp.strings;
    }
  }
);
