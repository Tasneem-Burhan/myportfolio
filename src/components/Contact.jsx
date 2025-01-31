import Image from "next/image";

export default function ContactInfo() {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
            <div className="card text-white about-card p-4 text-center w-50">
                <h2>Contact Info</h2>
                
                <div className="row align-items-center justify-content-center">
                    {/* Icons Column */}
                    <div className="col-auto d-flex flex-column align-items-center">
                        <Image src="/gmailicon.webp" alt="Gmail" width={30} height={30} className="mb-2" />
                        <Image src="/WhatsApp.webp" alt="WhatsApp" width={30} height={30} />
                    </div>

                    {/* Text Column */}
                    <div className="col-auto d-flex flex-column text-start">
                        <p className="mb-2">batterywala.tasneem@gmail.com</p>
                        <p className="mb-0">+91-9039142369</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
