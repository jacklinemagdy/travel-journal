import Entry from "./Entry"
import Header from "./Header"
import Data from "./Data"

export default function Page() {
    
    const dataEntry = Data.map((entryy) => {
        return (
            <Entry
                key={entryy.id}
                entry={entryy}
            />
            )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {dataEntry}
            </main>
            </>
    )
}