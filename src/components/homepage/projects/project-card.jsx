// @flow strict

import * as React from 'react';
import Image from "next/image";
import Marquee from "react-fast-marquee";

function ProjectCard({ project }) {

  const hasMultipleImages =
  Array.isArray(project.images) && project.images.length > 1;

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
<div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
  {project.id === 3 ? (
    // Styles spécifiques pour le projet avec id: 3
    hasMultipleImages ? (
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {project.images.map((image, index) => (
            <div key={index} className="mx-4">
              <Image
                src={image}
                alt={`${project.name} image ${index + 1}`}
                width={200} // Réduit la largeur
                height={400} // Réduit la hauteur
                className="rounded-lg object-contain" // Affiche toute l'image
              />
            </div>
          ))}
        </Marquee>
      </div>
    ) : (
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <Image
          src={
            Array.isArray(project.images)
              ? project.images[0]
              : project.images
          }
          alt={`${project.name} image`}
          width={200} // Réduit la largeur
          height={400} // Réduit la hauteur
          className="rounded-lg object-contain" // Affiche toute l'image
        />
      </div>
    )
  ) : (
    // Styles par défaut pour les autres projets
    hasMultipleImages ? (
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {project.images.map((image, index) => (
            <div key={index} className="mx-4">
              <Image
                src={image}
                alt={`${project.name} image ${index + 1}`}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    ) : (
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <img
          src={
            Array.isArray(project.images)
              ? project.images[0]
              : project.images
          }
          alt={`${project.name} image`}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
      </div>
    )
  )}

      
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="text-orange-400">{project.role}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;
