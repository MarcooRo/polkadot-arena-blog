import { Heading, Tag } from "@chakra-ui/react"
import Link from "next/link"

const parachainListP = ['Statemint', 'Astar', 'acala', 'MoonRiver', 'MoonBeam', 'Bifrost Polkadot', 'Centrifuge',
'Composable Finance', 'Darwinia', 'Efinity', 'Equilibrium', 'HydraDX', 'Kilt', 'Parallel Finance', 'Phala Network']

export function ParachainPolkadot() {
    return (
        <div>
            <Heading as='h2' fontSize='l' pb={6}>Scopri le parachain di Polkadot</Heading>
            {parachainListP.map((parachain) => (
                <Link href={`/categoria/${parachain}`} key={parachain}>
                    <a><Tag size='md' m={1} key={parachain} variant='solid' colorScheme='teal'>
                        {parachain}
                    </Tag></a>
                </Link>
            ))}
        </div>
    )
}

const parachainListK = [
    'Statemine', 'Karura', 'MoonRiver', 'Subsocial', 'Zeitgeist', 'Bit.Country Pioneer','Calamari Network',
'Crab Network', 'Crust Shadow', 'Heiko Finance', 'Integritee Kusama']

export function ParachainKusama() {
    return (
        <div>
            <Heading as='h2' fontSize='l' pb={6}>Scopri le parachain di Kusama</Heading>
            {parachainListK.map((parachain) => (
                <Link href={`/categoria/${parachain}`} key={parachain}>
                    <a><Tag size='md' m={1} key={parachain} variant='solid' colorScheme='teal'>
                        {parachain}
                    </Tag></a>
                </Link>
            ))}
        </div>
    )
}

const projects = ['Remark', 'Squid', 'DPS', 'Neon Crisis', 'YoudleDAO', 'GitArch']

export function Projects() {
    return (
        <div>
            <Heading as='h2' fontSize='l' pb={6}>Scopri i progetti del mondo Dotasama</Heading>
            {projects.map((project) => (
                <Link href={`/categoria/${project}`} key={project}>
                    <a><Tag size='md' m={1} key={project} variant='solid' colorScheme='teal'>
                        {project}
                    </Tag></a>
                </Link>
            ))}
        </div>
    )
}

const collectionsTag = ['XCVM', 'DeFi', 'Parachain', 'NFT', 'Cross-chain', 'Consenso', 'Staking', 'Base', 'Grandpa', 'Crowdloans'] 

export function CollectionsTag() {
    return (
        <div>
            <Heading as='h2' fontSize='l' pb={6}>Raccolte di articoli</Heading>
            {collectionsTag.map((tag) => (
                <Link href={`/categoria/${tag}`} key={tag}>
                    <a>
                    <Tag size='md' m={1} key={tag} variant='solid' colorScheme='teal'>
                        {tag}
                    </Tag>
                    </a>
                </Link>
            ))}
        </div>
    )
}