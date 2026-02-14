import type { IMoto } from '../types/Moto'

export function MotoCard({ moto }: { moto: IMoto }) {
    return (
        <div className="motorcycle-card">
            <img className="motorcycle-img" src={moto.img1} />
                <h3 className="motorcycle-title">{moto.nome}</h3>
                <div className="motorcycle-card-actions">
                    <a className="motorcycle-card-link" href={`/detalhes/${moto.nome}`}>Mais Detalhes</a>                    
                </div>
        </div>
    )
}