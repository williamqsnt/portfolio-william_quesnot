

'use client'
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Blogs() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const blogDetailsRef = useRef(null);
    const [isBlogVisible, setBlogVisible] = useState(false);

    const blogs = [
        {
            id: 1,
            date: "September 2023",
            title: "My First Blog Post",
            description: "This is my very first blog post.",
            thumbnail: "blog1.png",
            content: "This is the content of my first blog post.",
        },
        {
            id: 2,
            date: "January 2023",
            title: "A Journey into Web Development",
            description: "My experiences in web development.",
            thumbnail: "blog2.jpeg",
            content: "In this blog post, I'll share my journey and experiences in web development.",
        },
        {
            id: 3,
            date: "April 2022",
            title: "Building an E-commerce Website",
            description: "My experience with e-commerce website development.",
            thumbnail: "blog3.jpeg",
            content: "In this blog post, I'll discuss building an e-commerce website from scratch using Next.js.",
        },
        {
            id: 4,
            date: "Octobre 2023",
            title: "Automatisation de l'infrastructure avec Terraform",
            description: "Découvrez comment Terraform simplifie la gestion de l'infrastructure.",
            thumbnail: "terraform-image.jpg",
            content: `Avez-vous déjà rêvé de gérer votre infrastructure comme du code ? Terraform, un outil open source d'HashiCorp, rend cela possible. Dans cet article, nous allons plonger dans le monde passionnant de Terraform et découvrir comment il peut simplifier la gestion de votre infrastructure.
    
    ## Qu'est-ce que Terraform ?
    
    Terraform est un outil d'infrastructure en tant que code (IaC) qui vous permet de définir, configurer et provisionner des ressources d'infrastructure à l'aide de fichiers de configuration simples. Avec Terraform, vous pouvez traiter votre infrastructure de la même manière que vous traitez votre code source. Cela offre de nombreux avantages, notamment la reproductibilité, la collaboration, et la gestion efficace de l'infrastructure.
    
    ## Comment fonctionne Terraform ?
    
    Terraform utilise une approche déclarative pour décrire l'infrastructure. Vous créez un fichier de configuration appelé "Terraform HCL" (HashiCorp Configuration Language) où vous spécifiez les ressources que vous souhaitez provisionner, leurs paramètres, et leurs dépendances. Voici un exemple simple de configuration Terraform :
    
    \`\`\`hcl
    resource "aws_instance" "example" {
      ami           = "ami-0c55b159cbfafe1f0"
      instance_type = "t2.micro"
    }
    \`\`\`
    
    Ensuite, vous utilisez la commande \`terraform apply\` pour créer les ressources décrites dans votre fichier de configuration. Terraform gère les dépendances et crée les ressources de manière efficace.
    
    ## Avantages de Terraform
    
    1. **Infrastructure as Code (IaC)** : Terraform vous permet de traiter votre infrastructure comme du code, ce qui signifie que vous pouvez la versionner, la tester et la déployer de manière reproductible.
    
    2. **Multi-Cloud** : Terraform prend en charge de nombreux fournisseurs de cloud, ce qui vous permet de gérer des infrastructures multi-cloud avec une seule configuration.
    
    3. **Évolutivité** : Terraform est adapté aux petites et grandes infrastructures, ce qui le rend idéal pour les entreprises de toutes tailles.
    
    4. **Communauté Active** : Terraform bénéficie d'une communauté active qui crée et partage des modules Terraform pour faciliter la configuration d'infrastructures complexes.
    
    ## Exemple de cas d'utilisation
    
    Imaginons que vous souhaitiez déployer une application web sur AWS. Avec Terraform, vous pouvez configurer l'ensemble de votre infrastructure, y compris les instances EC2, les groupes de sécurité, les équilibreurs de charge, et les bases de données, en utilisant des fichiers de configuration Terraform. Cela simplifie considérablement le déploiement et la gestion de votre application.
    
    ## Conclusion
    
    Terraform est un outil puissant pour l'automatisation de l'infrastructure. Il permet de gérer efficacement les ressources d'infrastructure, de les versionner, et de les déployer de manière reproductible. Si vous cherchez à simplifier la gestion de votre infrastructure, Terraform est certainement un outil à considérer.
    
    N'oubliez pas de consulter la [documentation officielle de Terraform](https://www.terraform.io/) pour en savoir plus.`
        }
    ];
    const openBlog = (blog) => {
        setSelectedBlog(blog);
        setBlogVisible(true);
    };

    const closeBlog = () => {
        if (selectedBlog) {
            gsap.to(blogDetailsRef.current, { scale: 0, opacity: 0, duration: 0.3, onComplete: () => {
                setSelectedBlog(null);
                setBlogVisible(false);
                gsap.to(blogDetailsRef.current, { scale: 1, opacity: 1, duration: 0.3 });
            } });
        }
    };

    useEffect(() => {
        gsap.fromTo(blogDetailsRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });
    }, [selectedBlog]);

    const headerStyle = selectedBlog ? {
        backgroundColor: `url(${selectedBlog.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    } : {
        backgroundColor: "transparent",
    };

    return (
        <main className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full lg:h-screen h-auto about-me flex items-center justify-center" style={headerStyle}>
                <h1 className={`text-4xl lg:text-6xl font-bold lg:mt-0 mt-28 ${isBlogVisible ? 'text-white' : 'text-white'}`}>{isBlogVisible ? selectedBlog.title : "Blogs"}</h1>
            </div>
            <div className="lg:w-1/2 bg-gray-800 p-4 lg:h-screen w-full mt-16">
                {isBlogVisible ? (
                    <div ref={blogDetailsRef}>
                        <button onClick={closeBlog} className="text-blue-500 mt-4">Retour à la liste des blogs</button>
                        <h2 className="text-2xl text-white font-bold">{selectedBlog.title}</h2>
                        <p className="text-gray-300">{selectedBlog.date}</p>
                        <img
                            src={selectedBlog.thumbnail}
                            alt={`${selectedBlog.title} Thumbnail`}
                            className="h-40 w-40 object-contain rounded-md my-4"
                        />
                        <p className="text-gray-300">{selectedBlog.content}</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className={`flex cursor-pointer items-center justify-start space-x-4 rounded-md p-4`}
                                onClick={() => openBlog(blog)}
                            >
                                <div className="text-left">
                                    <img
                                        src={blog.thumbnail}
                                        alt={`${blog.title} Thumbnail`}
                                        className="h-10 w-10 object-contain rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                                    <div>
                                        <span className="text-white text-xs">{blog.date}</span>
                                        <h2 className={`text-lg font-semibold ${selectedBlog && selectedBlog.id === blog.id ? 'text-white' : 'text-blue-500'}`}>
                                            {blog.title}
                                        </h2>
                                        <p className="text-gray-300">{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
