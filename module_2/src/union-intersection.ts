
// & is used for Intersection

// NoobDeveloper | JuniorDeveloper union type syntax

type NoobDeveloper = {
    name: string
};

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}

type NextLevelDeveloper = JuniorDeveloper &{
    leadershipExperience:number,
    level: Level
    // level: "junior" | "mid" | "senior"    
}

enum Level {
    junior="junior",
    mid="mid",
    senior="senior"
}

const newDeveloper: NoobDeveloper | JuniorDeveloper ={
    name: "Tawsif"
}

const developer: NextLevelDeveloper ={
    name: "Tawsif",
    expertise: "React",
    experience: 4,
    leadershipExperience: 2,
    level: Level.junior
}
