/* Adjust header for big screens */

@media (min-width: 1281px) {
  #gatsby-focus-wrapper .header-box .navbar {
    transform: translateX(300px);
  }
}

/* Adjust sidebar for small screens */
@media (max-width: 767px) {
  #gatsby-focus-wrapper .btn.btn-primary span {
    display: none;
  }

  #gatsby-focus-wrapper .btn.btn-primary i {
    padding-left: 0;
  }

  .side-box ul.user-menu {
    margin-left: -10%;
  }
  .side-box .greeting-text {
    line-height: 1;
    font-size: 1.2rem;
  }
  .side-box .welcome-text {
    display: none;
  }

  .side-box .user-menu svg {
    transform: translateX(-50%);
    margin-left: 15px;
  }

  .side-box .user-menu a {
    display: block;
    text-align: center;
  }

  .side-box .user-menu a span {
    display: block;
    font-size: 1rem;
  }

  .side-box .logo-img {
    clip: rect(0, 30px, 50px, 0);
    position: relative;
    left: 40%;
  }
}
