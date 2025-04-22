"use client";
import { createGlobalStyle } from "styled-components";

const ArticleStyles = createGlobalStyle`
  [data-article-content] {
    font-family: 'Inter', sans-serif;
    color: #333;
    line-height: 1.6;
    margin-top: 1.5rem;
    
    /* Nagłówki */
    h1 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 1.5rem;
      font-weight: 700;
      border-bottom: 2px solid #007ba7;
      padding-bottom: 0.75rem;
    }
    
    h2 {
      font-size: 1.8rem;
      color: #2d3748;
      margin-top: 2.5rem;
      margin-bottom: 1.25rem;
      font-weight: 600;
      position: relative;
      padding-left: 1.5rem;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 5px;
        background-color: #007ba7;
        border-radius: 3px;
      }
    }
    
    h3 {
      font-size: 1.5rem;
      color: #4a5568;
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    
    /* Paragrafy */
    p {
      margin-bottom: 1.25rem;
      font-size: 1.05rem;
    }
    
    /* Obrazy */
    img {
      display: none;
    }
    
    /* Listy */
    ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.75rem;
        position: relative;
        padding-left: 0.5rem;
        
        &::before {
          content: '•';
          color: #007ba7;
          font-size: 1.25rem;
          position: absolute;
          left: -1rem;
          top: -0.25rem;
        }
      }
    }
    
    /* Wyróżnione elementy */
    strong {
      font-weight: 600;
      color: #007ba7;
    }
    
    /* Podpowiedzi (klasa hint) */
    .hint {
      background-color: rgba(0, 123, 167, 0.1);
      border-left: 4px solid #007ba7;
      padding: 1rem;
      margin: 1.5rem 0;
      border-radius: 0 4px 4px 0;
      font-style: italic;
      
      &::before {
        content: '💡 ';
      }
    }
    
    /* Linki */
    a {
      color: #007ba7;
      text-decoration: none;
      border-bottom: 1px dotted #007ba7;
      transition: color 0.3s ease, border-color 0.3s ease;
      
      &:hover {
        color: #005a80;
        border-color: #005a80;
      }
    }
    
    /* Tabele */
    figure.table {
      margin: 2rem 0;
      width: 100%;
      overflow-x: auto;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    thead {
      background-color: #007ba7;
      color: white;
    }
    
    th {
      padding: 0.75rem 1rem;
      text-align: left;
      font-weight: 600;
    }
    
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(0, 123, 167, 0.2);
    }
    
    tbody tr:last-child td {
      border-bottom: none;
    }
    
    tbody tr:nth-child(even) {
      background-color: rgba(0, 123, 167, 0.05);
    }
    
    tbody tr:hover {
      background-color: rgba(0, 123, 167, 0.1);
    }
    }
    
    @media (max-width: 768px) {
        [data-article-content] {
            h1 {
            font-size: 2rem;
            }
            
            h2 {
            font-size: 1.35rem;
            }
            
            h3 {
            font-size: 1.25rem;
            }
            
            p {
            font-size: 1rem;
            }
            
            ul {
            padding-left: 1rem;
            }
            
            img {
            display: none;
            }
        }
    }
  
`;

export default ArticleStyles;
