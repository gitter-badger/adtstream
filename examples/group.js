import { Stream } from "../src"

Stream.seq(['a', 'a', 'f', 'd', 'd', 'e'], 0, 1000)
        .group()
        .map( group => group.toArray() )
        .map( arr => arr.join('') )
        .log()