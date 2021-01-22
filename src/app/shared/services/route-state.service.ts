import { Injectable } from '@angular/core';
import { RouteState } from 'src/app/shared/models/route-state.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/**
 * Route state service
 * Save all route data, helps to navigate routes
 */
export class RouteStateService {

    constructor(private router: Router) {
    }

    /**
     * get current route data
     */
    getCurrent(): RouteState {
        var routeStates = this.getFromStorage();
        return routeStates[routeStates.length - 1];
    }

    /**
     * get all route data
     */
    getAll(): RouteState[] {
        var routeStates = this.getFromStorage();
        return routeStates;
    }

    /**
     * add route data
     * @param title route name
     * @param path route path
     * @param data route data
     * @param isParent is parent route
     */
    add(title: string, path: string, data: any, isParent: boolean) {
        if (isParent) {
            this.removeAll();
        }

        var routeStates = this.getFromStorage();

        var routeState = new RouteState();
        routeState.title = title;
        routeState.path = path;
        routeState.data = data;

        routeStates.push(routeState);
        this.saveToStorage(routeStates);
        this.navigate(routeState.path);
    }

    /**
     * load previous route
     */
    loadPrevious() {
        var routeStates = this.getFromStorage();
        routeStates.pop();
        this.saveToStorage(routeStates);
        var currentViewState = this.getCurrent();
        this.navigate(currentViewState.path);
    }

    /**
     * 
     * @param id load route route id
     */
    loadById(id: number) {
        var result = [];
        var isFound = false;
        var routeStates = this.getFromStorage();
        routeStates.forEach(route => {
            if (isFound) {
                return;
            }
            result.push(route);
            if (route.id === id) {
                isFound = true;
            }
        });
        routeStates = result;
        this.saveToStorage(routeStates);
        var currentViewState = this.getCurrent();
        this.navigate(currentViewState.path);
    }

    /**
     * remove all route data
     */
    removeAll() {
        this.removeFromStorage();
    }

    private saveToStorage(routeStates: any) {
        localStorage.setItem("routeState", JSON.stringify(routeStates));
    }

    private getFromStorage() {
        var routeStates = JSON.parse(localStorage.getItem("routeState"));
        return (routeStates === undefined || routeStates === null) ? [] : routeStates;
    }

    private removeFromStorage() {
        localStorage.removeItem("routeState");
    }

    private navigate(path: string) {
        this.router.navigate([path]);
    }

    /**/

    toToSalaDeImprensa(): void {
        this.add("Sala de Imprensa", "/tabs/sala-de-imprensa/", null, false);    
      }
    
      goToMapaInteractivo(): void {
        this.add("Mapa Interactivo", "/tabs/mapa-interactivo/", null, false);
        //this.add("Mapa Interactivo", "/tabs/tab3", null, false);
      }
    
      goToDadosEap(): void {
        this.add("Dados E&P", "/tabs/dados-eap/", null, false);    
      }
    
      goToInformacoesJuridicas(): void {
        this.add("Informações Jurídicas", "/tabs/informacao-juridica/", null, false);    
      }
    
      goToLicitacoes(): void {
        this.add("Licitações", "/tabs/licitacoes/", null, false);    
      }
    
      goToSobreNos(): void {
        this.add("Sobre Nós", "/tabs/sobrenos/", null, false);    
      }
    
      goToAgendamentoDataRoom(): void {
        this.add("Agendamento de Data Room", "/tabs/agendamento/", null, false);    
      }
    
      goToMapas(): void {
        this.add("Mapas", "/tabs/mapas/", null, false);    
      }
    
      goToFAQs(): void {
        this.add("FAQs", "/tabs/faq/", null, false);    
      }
}