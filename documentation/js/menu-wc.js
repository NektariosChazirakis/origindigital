'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">origindigital documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
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
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdminContainerComponent.html" data-type="entity-link" >AdminContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomSidenavComponent.html" data-type="entity-link" >CustomSidenavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorComponent.html" data-type="entity-link" >ErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GithubReposContainerComponent.html" data-type="entity-link" >GithubReposContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GithubReposListComponent.html" data-type="entity-link" >GithubReposListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GithubReposSearchFilterComponent.html" data-type="entity-link" >GithubReposSearchFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GithubReposTableViewComponent.html" data-type="entity-link" >GithubReposTableViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeContainerComponent.html" data-type="entity-link" >HomeContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoggedInContainerComponent.html" data-type="entity-link" >LoggedInContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoggedInLayoutComponent.html" data-type="entity-link" >LoggedInLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReportsContainerComponent.html" data-type="entity-link" >ReportsContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewGithubRepoDetailsComponent.html" data-type="entity-link" >ViewGithubRepoDetailsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CustomSerializer.html" data-type="entity-link" >CustomSerializer</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GithubReposEffects.html" data-type="entity-link" >GithubReposEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GithubReposFacade.html" data-type="entity-link" >GithubReposFacade</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GithubReposService.html" data-type="entity-link" >GithubReposService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpRequestService.html" data-type="entity-link" >HttpRequestService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GithubReposRequest.html" data-type="entity-link" >GithubReposRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GithubReposResponse.html" data-type="entity-link" >GithubReposResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GithubReposState.html" data-type="entity-link" >GithubReposState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link" >Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Licence.html" data-type="entity-link" >Licence</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Owner.html" data-type="entity-link" >Owner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationData.html" data-type="entity-link" >PaginationData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouterStateUrl.html" data-type="entity-link" >RouterStateUrl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SidenavItem.html" data-type="entity-link" >SidenavItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SidenavItemBase.html" data-type="entity-link" >SidenavItemBase</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/BooleanToTextPipe.html" data-type="entity-link" >BooleanToTextPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
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
});