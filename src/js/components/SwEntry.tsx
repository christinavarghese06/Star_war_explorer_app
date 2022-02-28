
import { getWindowDomain, removeWhiteSpaces, showUnits} from "../utils/utils";

export const SwEntriesPeople = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry__header">{entry.name}</h5>
            <p className="entry__info"><span className="entry__label">height:</span> {entry.height} {showUnits(entry.height, 'cm')}</p>
            <p className="entry__info"><span className="entry__label">mass:</span> {entry.mass} {showUnits(entry.mass, 'kg')}</p>
            <p className="entry__info"><span className="entry__label">hair color:</span> {entry.hair_color}</p>
            <p className="entry__info"><span className="entry__label">skin color:</span> {entry.skin_color}</p>
            <p className="entry__info"><span className="entry__label">gender:</span> {entry.gender}</p>
            <p className="entry__info"><span className="entry__label">birth year:</span> {entry.birth_year}</p>                   
        </div>      
    )
};

export const SwEntriesMovies = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry__header">{entry.title}</h5>
            <p className="entry__info"><span className="entry__label">director:</span> {entry.director}</p>
            <p className="entry__info"><span className="entry__label">producer:</span> {entry.producer}</p>
        </div>
    )
};

export const SwEntriesPlanets = ({ entry }) => {
    return (
        <div className="entry">
            <h5 className="entry__header">{entry.name}</h5>
            <p className="entry__info"><span className="entry__label">terrain:</span> {entry.terrain}</p>
            <p className="entry__info"><span className="entry__label">population:</span> {entry.population}</p>
           
        </div>      
    )
};




const SwEntriesTemplates = {
    'characters': SwEntriesPeople,
    'movies': SwEntriesMovies,
    'planets': SwEntriesPlanets,
};

interface swProps {
    type: string;
    data: object;
}

export default function SwEntry(props: swProps) {
    const SWEntryTemplate = SwEntriesTemplates[props.type];

    return (
        <div>
            <SWEntryTemplate entry={props.data}/>
        </div>    
    );
}  