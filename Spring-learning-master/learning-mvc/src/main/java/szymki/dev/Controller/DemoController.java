package szymki.dev.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseBody;
import szymki.dev.service.DemoService;

@Slf4j
@Controller
public class DemoController {
    private final DemoService demoService;

    @Autowired
    public DemoController(DemoService demoService) {
        this.demoService = demoService;
    }

    // http://localhost:8080/learning-mvc/hello
    @ResponseBody
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

    // http://localhost:8080/learning-mvc/welcome
    @GetMapping("welcome")
    public String welcome(Model model){
        log.info("model = {}", model);
        model.addAttribute("helloMessage",
                demoService.getHelloMessage("Tim"));

        return "welcome";
    }

    @ModelAttribute("welcomeMessage")
    public String welcomeMessage(){
        log.info("welcomeMessage() called");

        return demoService.getWelcomeMessage();
    }



}
