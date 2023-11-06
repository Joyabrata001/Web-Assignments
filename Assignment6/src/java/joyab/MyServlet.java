/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package joyab;

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 *
 * @author joyab
 */
@WebServlet(name = "MyServlet", urlPatterns = {"/MyServlet"})
public class MyServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get user input from the form
        String email = request.getParameter("inputEmail4");
        String addressLine1 = request.getParameter("inputAddress");
        String addressLine2 = request.getParameter("inputAddress2");
        String country = "India";
        String state = "West Bengal";
        String city = request.getParameter("inputCity");
        String zip = request.getParameter("inputZip");
        String newsLetterRequest = request.getParameter("inlineRadioOptions");

        // Construct the response HTML
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Server-Side Response</h1>");
        out.println("<p>Email: " + email + "</p>");
        out.println("<p>Address Line 1: " + addressLine1 + "</p>");
        out.println("<p>Address Line 2: " + addressLine2 + "</p>");
        out.println("<p>Country: " + country + "</p>");
        out.println("<p>State: " + state + "</p>");
        out.println("<p>City: " + city + "</p>");
        out.println("<p>Zip: " + zip + "</p>");
        if(newsLetterRequest.contentEquals("option1"))
            out.println("<p>User has opted for newsletter</p>");
        else
            out.println("<p>User has not opted for newsletter</p>");
        out.println("</body></html>");
    }
}