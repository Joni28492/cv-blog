interface IProject{
    nameProyect: string
    desc?: string
    url: string
    technologies?: Technologies[]
}

type Technologies= 'HTML'|'CSS'|'JS'| 'Node' | 'Typescript' | 'React' | 'Next';

export const visibleProjects:IProject[] = [

  
    {nameProyect:'Pokemon Static App Next', desc:'', url: 'https://pokemon-static-dqk52yzm0-joni28492.vercel.app/',},
    {nameProyect:'Estas en ella', desc:'', url: 'https://joni28492.github.io/cv-blog/',},
    {nameProyect:'App valdes CheatSheet', desc:'', url: 'https://joni28492.github.io/Joni28492.github.io-infraccionesComunes/',},
    {nameProyect:'Stock App - JS', desc:'', url: 'https://joni28492.github.io/app_Stock_Arlequin_kinderHouse/',},
    {nameProyect:'SPA - React', desc:'', url: 'https://joni28492.github.io/SPA-Heroes/#/marvel',},
    {nameProyect:'Gift App React', desc:'', url: 'https://joni28492.github.io/react-gif-expert-app/',},
    {nameProyect:'TodoList JS', desc:'', url: 'https://joni28492.github.io/App-Lista-Tareas-01-ejerciciogit-/',},
    {nameProyect:'BlackJack JS', desc:'', url: 'https://joni28492.github.io/BlackJack_JS_PruebaGit/'},

    
]

export const repoProyects:IProject[] = [
    
        {nameProyect: 'React Patrones Componentes',desc:'',url: 'https://github.com/Joni28492/react-adv'},
        {nameProyect: 'Calculadora React Native',desc:'',url: 'https://github.com/Joni28492/CalculadoraIOS-ReactNative',},
        {nameProyect: 'OpenJira - Drag & Drop',desc:'',url: 'https://github.com/Joni28492/OpenJira-Next-js'},
        {nameProyect: 'Rest Server Node',desc:'',url: 'https://github.com/Joni28492/curso-node-restserver',
        technologies: ['Next', 'Typescript']
        }
]