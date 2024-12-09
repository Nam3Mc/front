import { useRouter } from "next/navigation";

export default function PropertyCard({ name, price, image, description, pets, id }: Property) {
    
    const router = useRouter()
    const bookHandler = async () => {
        router.push(`/book?id=${id}`)
        
    }
    
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', width: '440px', margin: '10px' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{name}</h2>
            <div style={{ width: '100%', height: '150px', overflow: 'hidden', marginBottom: '10px', backgroundColor: '#f0f0f0' }}>
                {image && image.length > 0 ? (
                    image.map((img, index) => (
                        <div key={index} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                src={img}
                                alt={`Photo ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', lineHeight: '150px', color: '#888' }}>No images available</p>
                )}
            </div>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Price: ${price}</p>
            <p style={{ marginBottom: '10px' }}>{description}</p>
            <p>Pets allowed: {pets ? "Yes" : "No"}</p>
            <button
            onClick={bookHandler}
            >
                Book Now
            </button>
        </div>
    );
}
