# this files helps us define all authorization rules for our application, we can
# these rules in our controllers and views throughout our application.
class Ability
  include CanCan::Ability

  # we don't need to initialize an instance of the `Ability` class ourselves,
  # this is automatically done for us by the CanCanCan gem. The only thing we
  # need to make sure of is that we have a method in the controller called
  # `current_user` that returns an object of the currently logged in user (we
  # already have that)
  def initialize(user)

    # user -> current_user
    # if the user is not signed in then `user` will be `nil`

    # it usually recommended that you initialize the `user` argument to a new
    # User so we don't have to check if `user` is nil all the time.
    user ||= User.new

    # this says that if the `is_admin?` methods returns true then the user is
    # is able to `manage` meaning do any action of any model in the application
    if user.is_admin?
      can :manage, :all
    end

    # DSL -> Domain Specific Language: Ruby code written in a certain way to
    #                                  looks like its own language but keep in
    #                                  mind it's just Ruby code

    # in this rule we're saying: the user can `manage` meaning do any action on
    # the question object if `ques.user == user` which means if the owner of
    # the question is the currently signed in user
    can :manage, Question do |ques|
      ques.user == user
    end

    can :destroy, Answer do |ans|
      ans.user == user || ans.question.user == user
    end

    can :like, Question do |question|
      question.user != user
    end

    cannot :like, Question do |question|
      question.user == user
    end

    # remember that this only defines the rules, you still have to enforce the
    # rules yourself by actually using those rules in the controllers and views
    # the advantage is that all of our authoization rules are in one file so we
    # only have to come and change this file when authoization rules change.


    # Define abilities for the passed in user here. For example:
    #
    #   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities
  end
end
