import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export default function Fotos() {
    const { register } = useFormContext();
    const [selectedImages, setSelectedImages] = useState<Array<string | ArrayBuffer>>([]);

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            Array.from(event.target.files).forEach((file) => {
                let reader = new FileReader();

                reader.onload = (e: any) => {
                    setSelectedImages(prevImages => [...prevImages, e.target?.result]);
                };

                reader.readAsDataURL(file);
            });
        }
    };

    const removeImage = (index: number) => {
        setSelectedImages(prevImages => prevImages.filter((img, imgIndex) => imgIndex !== index));
    };

    return (
        <section className="flex flex-col gap-8 w-10/12">
            <h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">Fotos da
                <span className="text-sky-500 font-bold pl-1">República</span></h2>
            <p className="text-[#212529] font-roboto font-normal text-base leading-[18.75px]
            text-left align-middle">Adicione fotos da sua república para tornar o anúncio mais atrativo.</p>
            <div className="flex justify-center items-center flex-row">
                <input type="file" {...register('fotos')} onChange={onImageChange} multiple />
                {selectedImages.map((image, index) => (
                    <div key={index} className="relative mt-5 flex mr-3 flex-wrap">
                        <img src={image.toString()} alt="Preview" className="w-40 h-32 object-cover rounded-md" />
                        <button
                            onClick={() => removeImage(index)}
                            className="absolute right-0 top-0 bg-red-600 text-white p-1 cursor-pointer"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
