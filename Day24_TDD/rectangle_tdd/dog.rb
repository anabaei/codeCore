class Dog 
  def initilize
   @bones = [] 
  end 

  def give_bone(bone)
    @bones.push(bone) if @bones.count < 3
    @bones.count  
  end 

end  
