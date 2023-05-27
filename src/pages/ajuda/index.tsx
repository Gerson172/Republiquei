import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Funcionalidade/Footer';

function Ajuda() {

  return (
    <>
    <NavBar/>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
            Dúvidas frequentes
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                O que é uma república?
              </h3>
              <p className="mt-2 text-gray-600 ">
              A república é uma casa ou apartamento compartilhado apenas por estudantes. O local, quase sempre, está situado bem próximo da instituição de ensino, o que facilita o cotidiano da vida acadêmica.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
              Qual a missão do Republiquei?
              </h3>
              <p className="mt-2 text-gray-600">
              O Republiquei surge com a ideia de criar uma maneira simplificada para todos os universitários brasileiros encontrarem uma moradia digna para seguirem seus estudos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
              Onde eu posso entrar em contato?
              </h3>
              <p className="mt-2 text-gray-600">
              Você pode entrar em contato através do Discord, Twitter e Facebook.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How secure is Preline?
              </h3>
              <p className="mt-2 text-gray-600">
                Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Do you offer discounts?
              </h3>
              <p className="mt-2 text-gray-600">
                We've built in discounts at each tier for teams. The time has come to bring those ideas and plans to life.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                What is your refund policy?
              </h3>
              <p className="mt-2 text-gray-600">
                We offer refunds. We aim high at being focused on building relationships with our clients and community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://img.freepik.com/fotos-gratis/alegres-amigos-multietnicas-tomando-selfie-engracado-grupo_1262-21109.jpg?w=1380&t=st=1667522273~exp=1667522873~hmac=dd069b1781a0bcb7e31cbecf8fc0673719341f61302703525fe2b4230083e8a8" />
      </div>

      <Footer />
    </>
  );
};

export default Ajuda;
