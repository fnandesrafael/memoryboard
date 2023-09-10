const WIDTH = 400;

const compressImg = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = document.createElement('img');
      img.src = event.target.result as string;

      img.onload = (e: Event & { target: HTMLImageElement }) => {
        const canvas = document.createElement('canvas');
        const aspectRation = WIDTH / e.target.width;
        canvas.width = WIDTH;
        canvas.height = e.target.height * aspectRation;

        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        resolve(context.canvas.toDataURL());
      };
    };
  });
};

export default compressImg;
