import { Project } from '../types'

export function GenerateEndpoint(project: Project): string {
    let URL = 'https://'

    const multilingualProjects = {
        mediawiki: 'mediawiki',
        meta: 'meta.wikimedia',
        incubator: 'incubator.wikimedia',
        commons: 'commons.wikimedia',
        wikidata: 'wikidata',
        species: 'species.wikimedia'
    } as { [key: string]: string }

    URL += multilingualProjects [project] ?? ''

    if (URL == 'https://') {
        if (project.endsWith ('wiki')) URL += `${project.replace ('wiki', '')}.wikipedia`
        else if (project.endsWith ('wikt')) URL += `${project.replace ('wiki', '')}.wiktionary`
        else {
            for (const projectCode of ['quote', 'news', 'source', 'books', 'versity', 'voyage']) {
                if (URL == 'https://' && project.includes (projectCode)) URL += `${project.replace(projectCode, '')}.wiki${projectCode}`
                if (URL != 'https://') break
            }
        }
    }

    return URL += '.org/w/api.php'
}