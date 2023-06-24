import { useEffect, useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { Imovel } from '~/types/Imovel';

export default function Fotos() {
  const {
    register,
    formState: { errors },
    setValue,
    watch
  } = useFormContext<Imovel>();

  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImages = watch('midia1');
    if (Array.isArray(savedImages)) {
      setSelectedImages(savedImages.filter((image) => image !== null) as string[]);
    }
  }, [watch]);

  useEffect(() => {
    setValue('midia1', selectedImages[0] || '');
    setValue('midia2', selectedImages[1] || '');
    setValue('midia3', selectedImages[2] || '');
  }, [selectedImages, setValue]);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      Array.from(event.target.files).forEach((file) => {
        let reader = new FileReader();

        reader.onload = (e: any) => {
          if (typeof e.target?.result === 'string') {
            const newSelectedImages = [...selectedImages, e.target?.result];
            setSelectedImages(newSelectedImages);
            localStorage.setItem('selectedImages1', newSelectedImages[0] || '');
            localStorage.setItem('selectedImages2', newSelectedImages[1] || '');
            localStorage.setItem('selectedImages3', newSelectedImages[2] || '');
          }
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = selectedImages.filter((_, imgIndex) => imgIndex !== index);
    setSelectedImages(updatedImages);
    localStorage.setItem('selectedImages1', updatedImages[0] || '');
    localStorage.setItem('selectedImages2', updatedImages[1] || '');
    localStorage.setItem('selectedImages3', updatedImages[2] || '');
  };

  return (
    <section className="flex flex-col gap-8 w-10/12">
      <h2 className="text-3xl font-semibold text-slate-900 leading-[18.75px]">
        Fotos da
        <span className="text-sky-500 font-bold pl-1">República</span>
      </h2>
      <p className="text-[#212529] font-roboto font-normal text-base leading-[18.75px] text-left align-middle">
        Adicione fotos da sua república para tornar o anúncio mais atrativo.
      </p>
      <div className="flex justify-center items-center flex-row">
        <input
          type="file"
          id="midia"
          {...register('midia1')}
          onChange={onImageChange}
          multiple
          ref={inputRef}
        />
        {errors.midia1 && (
          <span className="text-sm text-red-500">{errors.midia1.message}</span>
        )}
        {selectedImages.map((image, index) => (
          <div key={index} className="relative mt-5 flex mr-3 flex-wrap">
            <img
              src={image.toString()}
              alt="Preview"
              className="w-40 h-32 object-cover rounded-md"
            />
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
